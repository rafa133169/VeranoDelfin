#include <WiFi.h>
#include <SPIFFS.h>
#include <WebServer.h>
#include <DHT.h>

// Configuración de red Wi-Fi
const char* ssid = "G5_Mecha";
const char* password = "b69332e6fd";

// Pines 
#define DHTPIN 15      
#define MQ135_PIN 34    

// Definiciones
DHT dht(DHTPIN, DHT11);

// Crear una instancia del servidor web
WebServer server(80);

void connectToWiFi() {
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi..");
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println();
  Serial.println("Connected to WiFi");
  Serial.println(WiFi.localIP());  // Imprimir la IP local
}

void setup() {
  Serial.begin(115200);

  // Conectar a la red Wi-Fi
  connectToWiFi();

  // Inicializar SPIFFS
  if (!SPIFFS.begin(true)) {
    Serial.println("An error has occurred while mounting SPIFFS");
    return;
  }

  // Crear y escribir en un archivo si no existe
  if (!SPIFFS.exists("/data.txt")) {
    File file = SPIFFS.open("/data.txt", FILE_WRITE);
    if (file) {
      file.println("Temperatura del aire DHT11,Humedad del aire DHT11,Calidad de Aire MQ-135");
      file.close();
    } else {
      Serial.println("Failed to open file for writing");
    }
  }

  // Configurar la ruta del servidor para la descarga de archivos
  server.on("/download", HTTP_GET, []() {
    File downloadFile = SPIFFS.open("/data.txt", FILE_READ);
    if (downloadFile) {
      server.streamFile(downloadFile, "text/plain");
      downloadFile.close();
    } else {
      server.send(404, "text/plain", "File not found");
    }
  });

  // Iniciar el servidor
  server.begin();

  // Inicializar sensores
  dht.begin();
}

void loop() {
  // Verificar el estado de la conexión Wi-Fi y reconectar si es necesario
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("Disconnected from WiFi, attempting to reconnect...");
    connectToWiFi();
  }

  // Leer sensores
  float tempDHT11 = dht.readTemperature();
  float humidityDHT11 = dht.readHumidity();
  int mq135Value = analogRead(MQ135_PIN);

  // Imprimir datos en el monitor serial
  Serial.print("Temperatura del aire DHT11: ");
  Serial.print(tempDHT11);
  Serial.print(" °C, ");

  Serial.print("Humedad del aire DHT11: ");
  Serial.print(humidityDHT11);
  Serial.print(" %, ");

  Serial.print("Calidad de Aire MQ-135: ");
  Serial.println(mq135Value);

  // Guardar datos en SPIFFS
  File dataFile = SPIFFS.open("/data.txt", FILE_APPEND);
  if (dataFile) {
    dataFile.print(tempDHT11);
    dataFile.print(",");
    dataFile.print(humidityDHT11);
    dataFile.print(",");
    dataFile.println(mq135Value);
    dataFile.close();
  } else {
    Serial.println("Error al escribir en SPIFFS");
  }

  // Manejar las solicitudes del servidor
  server.handleClient();

  // Esperar 5 segundos antes de la siguiente lectura
  delay(5000);
}
