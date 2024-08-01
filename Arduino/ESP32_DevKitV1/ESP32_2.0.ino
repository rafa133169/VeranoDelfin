
#include <DHT.h>
#include <SD.h>
#include <SPI.h>

// Pines 
#define DHTPIN 15      
#define MQ135_PIN 34    
#define SD_CS_PIN 5     

// Definiciones

DHT dht(DHTPIN, DHT11);
File dataFile;

void setup()
{
    Serial.begin(115200); // Velocidad de baudios para el ESP32

    // Inicializar sensores

    dht.begin();

    // Inicializar SD
    if (!SD.begin(SD_CS_PIN))
    {
        Serial.println("Error al inicializar la tarjeta SD");
        return;
    }
    Serial.println("Tarjeta SD inicializada correctamente");

    // Crear o abrir archivo
    dataFile = SD.open("/test.txt", FILE_WRITE);
    if (dataFile)
    {
        dataFile.println("Temperatura del aire DHT11,Humedad del aire DHT11,Calidad de Aire MQ-135");
        dataFile.close();
    }
    else
    {
        Serial.println("Error al abrir el archivo en la SD");
    }
}

void loop()
{
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

    // Guardar datos en la SD
    dataFile = SD.open("/test.txt", FILE_WRITE);
    if (dataFile)
    {
       
        dataFile.print(tempDHT11);
        dataFile.print(",");
        dataFile.print(humidityDHT11);
        dataFile.print(",");
        dataFile.println(mq135Value);
        dataFile.close();
    }
    else
    {
        Serial.println("Error al escribir en la SD");
    }


    delay(5000);
}