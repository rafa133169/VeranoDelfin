#include <OneWire.h>
#include <DallasTemperature.h>
#include <DHT.h>
#include <SD.h>
#include <SPI.h>

// Pines
#define ONE_WIRE_BUS 2
#define DHTPIN 15     
#define MQ135_PIN 34 
#define SD_CS_PIN 5

// Definiciones
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);
DHT dht(DHTPIN, DHT11);
File dataFile;

void setup()
{
    Serial.begin(115200); // Velocidad de baudios para el ESP32

    // Inicializar sensores
    // sensors.begin();
    dht.begin();

    // Inicializar SD
    // if (!SD.begin(SD_CS_PIN))
    // {
    //     Serial.println("Error al inicializar la tarjeta SD");
    //     return;
    // }
    // Serial.println("Tarjeta SD inicializada correctamente");

    // // Crear o abrir archivo
    // dataFile = SD.open("/data.txt", FILE_WRITE);
    // if (dataFile)
    // {
    //     dataFile.println("Temperatura del agua DS18B20,Temperatura del aire DHT11,Humedad del aire DHT11,Calidad de Aire MQ-135");
    //     dataFile.close();
    // }
    // else
    // {
    //     Serial.println("Error al abrir el archivo en la SD");
    // }
}

void loop()
{
    // Leer sensores
    // sensors.requestTemperatures();
    //float tempDS18B20 = sensors.getTempCByIndex(0);

    float tempDHT11 = dht.readTemperature();
    float humidityDHT11 = dht.readHumidity();

    int mq135Value = analogRead(MQ135_PIN);

    // Imprimir datos en el monitor serial
    // Serial.print("Temperatura del agua DS18B20: ");
    // Serial.print(tempDS18B20);
    // Serial.print(" °C, ");

    Serial.print("Temperatura del aire DHT11: ");
    Serial.print(tempDHT11);
    Serial.print(" °C, ");

    Serial.print("Humedad del aire DHT11: ");
    Serial.print(humidityDHT11);
    Serial.print(" %, ");

    Serial.print("Calidad de Aire MQ-135: ");
    Serial.println(mq135Value);

    // Guardar datos en la SD
    // dataFile = SD.open("/data.txt", FILE_WRITE);
    // if (dataFile)
    // {
    //     dataFile.print(tempDS18B20);
    //     dataFile.print(",");
    //     dataFile.print(tempDHT11);
    //     dataFile.print(",");
    //     dataFile.print(humidityDHT11);
    //     dataFile.print(",");
    //     dataFile.println(mq135Value);
    //     dataFile.close();
    // }
    // else
    // {
    //     Serial.println("Error al escribir en la SD");
    // }

    // Esperar 10 minutos antes de la siguiente lectura
    delay(600000);
}
