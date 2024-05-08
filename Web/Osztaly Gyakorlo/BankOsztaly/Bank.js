class BankFiok {
    constructor(nev, cim, egyenleg) {
        this.nev = nev;
        this.cim = cim;
        this.egyenleg = parseInt(egyenleg) || 0;
    }

    befizetes(osszeg) {
        this.egyenleg += osszeg;
        return `${osszeg} Ft befizetve. Aktuális egyenleg: ${this.egyenleg} Ft`;
    }

    kivetel(osszeg) {
        if (osszeg <= this.egyenleg) {
            this.egyenleg -= osszeg;
            return `${osszeg} Ft kivéve. Aktuális egyenleg: ${this.egyenleg} Ft`;
        } else {
            return "Nincs elegendő fedezet a kivételhez.";
        }
    }

    aktualisEgyenleg() {
        return `Aktuális egyenleg: ${this.egyenleg} Ft`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var egyenlegDiv = document.getElementById("egyenlegDiv");
    var nevInput = document.getElementById("nev");
    var cimInput = document.getElementById("cim");
    var egyenlegInput = document.getElementById("egyenleg");

    document.getElementById("feltolt").value = 0;
    document.getElementById("levon").value = 0;
  
    document.getElementById("feltoltes").addEventListener('click', function() {
        var feltoltErtek = parseInt(document.getElementById("feltolt").value) || 0;
        var bankfiok = new BankFiok(nevInput.value, cimInput.value, parseInt(egyenlegInput.value));
        egyenlegDiv.innerText = bankfiok.befizetes(feltoltErtek);
        egyenlegInput.value = bankfiok.egyenleg;
    });
  
    document.getElementById("levetel").addEventListener('click', function() {
        var levonErtek = parseInt(document.getElementById("levon").value) || 0;
        var bankfiok = new BankFiok(nevInput.value, cimInput.value, parseInt(egyenlegInput.value));
        egyenlegDiv.innerText = bankfiok.kivetel(levonErtek);
        egyenlegInput.value = bankfiok.egyenleg;
    });
});
