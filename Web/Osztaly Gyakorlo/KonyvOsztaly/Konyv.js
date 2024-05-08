class Konyv {
    constructor(cim, szerzo, kiadasiEv) {
        this.cim = cim;
        this.szerzo = szerzo;
        this.kiadasiEv = kiadasiEv;
    }

    getAdatok() {
        return `Cím: ${this.cim}, Szerző: ${this.szerzo}, Kiadási év: ${this.kiadasiEv}`;
    }
}
document.addEventListener('DOMContentLoaded', function () {
    function submitForm() {
        const cim = document.getElementById('cim').value;
        const szerzo = document.getElementById('szerzo').value;
        const kiadasiEv = document.getElementById('kiadasiEv').value;

        const konyv = new Konyv(cim, szerzo, kiadasiEv);
        const konyvAdatokDiv = document.getElementById('konyvAdatok');
        konyvAdatokDiv.innerHTML = `<p class="fw-bold">Könyv adatai:</p>
                                     <p>Cím: ${konyv.cim}</p>
                                     <p>Szerző: ${konyv.szerzo}</p>
                                     <p>Kiadási év: ${konyv.kiadasiEv}</p>`;
    }
    
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', submitForm);
});