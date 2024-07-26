#include <DHT.h>

// Pines
#define DHTPIN 4
#define MQ135_PIN A0 

// Definiciones
DHT dht(DHTPIN, DHT11);

void setup()
{
    Serial.begin(9600);

    // Inicializar sensor DHT11
    dht.begin();
}

void loop()
{
    // Leer temperatura y humedad del DHT11
    float tempDHT11 = dht.readTemperature();
    float humidityDHT11 = dht.readHumidity();

    // Verificar si las lecturas son válidas
    // if (isnan(tempDHT11) || isnan(humidityDHT11))
    // {
    //     Serial.println("Error al leer el sensor DHT11");
    //     return;
    // }

    // Leer valor del sensor MQ-135
    int mq135Value = analogRead(MQ135_PIN);

    // // Imprimir datos en el monitor serial
    // Serial.print("Temperatura del aire DHT11: ");
    // Serial.print(tempDHT11);
    // Serial.print(" °C, ");

    // Serial.print("Humedad del aire DHT11: ");
    // Serial.print(humidityDHT11);
    // Serial.print(" %, ");

    Serial.print("Calidad de Aire MQ-135: ");
    Serial.println(mq135Value);

    // Esperar 10 segundos antes de la siguiente lectura
    delay(10000); // Ajustado a 10 segundos para pruebas más rápidas
}
