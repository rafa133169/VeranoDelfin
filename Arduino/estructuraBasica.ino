#include <OneWire.h>
#include <DallasTemperature.h>
#include <DHT.h>
#include <SD.h>
#include <Wire.h>
#include <Adafruit_BMP085.h>

#define ONE_WIRE_BUS 2
#define DHTPIN 3
#define DHTTYPE DHT22
#define CHIP_SELECT 4

OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature waterTempSensor(&oneWire);
DHT dht(DHTPIN, DHTTYPE);
Adafruit_BMP085 bmp;

void setup()
{
    Serial.begin(9600);
    waterTempSensor.begin();
    dht.begin();
    bmp.begin();
    SD.begin(CHIP_SELECT);
}

void loop()
{
    // Leer temperatura del agua
    waterTempSensor.requestTemperatures();
    float waterTemp = waterTempSensor.getTempCByIndex(0);

    // Leer temperatura y humedad del aire
    float airTemp = dht.readTemperature();
    float humidity = dht.readHumidity();

    // Leer presión atmosférica
    float pressure = bmp.readPressure();

    // Guardar datos en la tarjeta SD
    File dataFile = SD.open("datalog.txt", FILE_WRITE);
    if (dataFile)
    {
        dataFile.print("Water Temp: ");
        dataFile.print(waterTemp);
        dataFile.print(" C, Air Temp: ");
        dataFile.print(airTemp);
        dataFile.print(" C, Humidity: ");
        dataFile.print(humidity);
        dataFile.print(" %, Pressure: ");
        dataFile.print(pressure);
        dataFile.println(" Pa");
        dataFile.close();
    }

    // Imprimir datos en el monitor serial
    Serial.print("Water Temp: ");
    Serial.print(waterTemp);
    Serial.print(" C, Air Temp: ");
    Serial.print(airTemp);
    Serial.print(" C, Humidity: ");
    Serial.print(humidity);
    Serial.print(" %, Pressure: ");
    Serial.print(pressure);
    Serial.println(" Pa");
    
    delay(600000); //Diez Minutos
}
