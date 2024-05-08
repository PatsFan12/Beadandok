class HomersekletKonverter {
    constructor(celsius, fahrenheit) {
        this.celsius = celsius;
        this.fahrenheit = fahrenheit;
    }

    celsiusToFahrenheit() {
        this.fahrenheit = (this.celsius * 9/5) + 32;
        return this.fahrenheit;
    }

    fahrenheitToCelsius() {
        this.celsius = (this.fahrenheit - 32) * 5/9;
        return this.celsius;
    }
}
document.addEventListener('DOMContentLoaded', function() {
    function convertToFahrenheit() {
        const celsius = parseFloat(document.getElementById('celsius').value);

        if (isNaN(celsius)) {
            alert('Kérem, adjon meg egy érvényes számot Celsiusban!');
            return;
        }

        const konverter = new HomersekletKonverter(celsius, null);
        const fahrenheit = konverter.celsiusToFahrenheit();
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(1);
    }

    function convertToCelsius() {
        const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);

        if (isNaN(fahrenheit)) {
            alert('Kérem, adjon meg egy érvényes számot Fahrenheitben!');
            return;
        }

        const konverter = new HomersekletKonverter(null, fahrenheit);
        const celsius = konverter.fahrenheitToCelsius();
        document.getElementById('celsius').value = celsius.toFixed(1);
    }

    document.getElementById('Fahrenheit').addEventListener('click', convertToFahrenheit);
    document.getElementById('Celsius').addEventListener('click', convertToCelsius);
});
