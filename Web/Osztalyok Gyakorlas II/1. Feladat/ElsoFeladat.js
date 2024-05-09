class Szemely{
    constructor(vezetekNev,keresztNev,eletkor,hobby){
        this.vezetekNev = vezetekNev;
        this.keresztNev = keresztNev;
        this.eletkor = eletkor;
        this.hobby = hobby;
    }

    setHobby(hobby){
        this.hobby = hobby;
    }

    getTeljesnev(){
        return this.vezetekNev + " " + this.keresztNev;
    }

    getEletkor(){
        return this.eletkor;
    }

    getHobby(){
        return this.hobby;
    }
}



document.addEventListener('DOMContentLoaded', function(){
    let kisskati = new Szemely("Kiss","Katalin",28,"");
    kisskati.setHobby("futás");
    document.getElementById("teljesnevLabel").textContent= "Teljes neve: " + kisskati.getTeljesnev();
    document.getElementById("eletkorLabel").textContent="Életkora: " + kisskati.getEletkor();
    document.getElementById("hobbyLabel").textContent= "Kedvenc elfoglaltsága: " + kisskati.getHobby();

    document.getElementById("submitButton").addEventListener("click", function(){
        const teljesNevInput = document.getElementById("teljesnev").value;
        const eletkorInput = document.getElementById("eletkor").value;
        const hobbyInput = document.getElementById("hobby").value;

        const [vezeteknev,keresztnev] = teljesNevInput.split(" ");
        const szemely = new Szemely(vezeteknev,keresztnev,eletkorInput,hobbyInput)

        document.getElementById("teljesnevLabel").textContent= "Teljes neve: " + szemely.getTeljesnev();
        document.getElementById("eletkorLabel").textContent="Életkora: " + szemely.getEletkor();
        document.getElementById("hobbyLabel").textContent= "Kedvenc elfoglaltsága: " + szemely.getHobby();

    })
})
