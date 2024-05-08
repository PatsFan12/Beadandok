class Szemely {
    constructor(nev, eletkor, nem) {
        this.nev = nev;
        this.eletkor = eletkor;
        this.nem = nem;
    }

    getAdatok() {
        return `Név: ${this.nev}, Életkor: ${this.eletkor}, Nem: ${this.nem}`;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    function submitForm() {
        const nev = document.getElementById('nev').value;
        const eletkor = document.getElementById('eletkor').value;
        const nem = document.getElementById('nem').value;

        const szemely = new Szemely(nev, eletkor, nem);
        const szemelyAdatokDiv = document.getElementById('szemelyAdatok');
        szemelyAdatokDiv.innerHTML = `<p class="fw-bold">Személy adatai:</p>
                                      <p>Név: ${szemely.nev}</p>
                                      <p>Életkor: ${szemely.eletkor}</p>
                                      <p>Nem: ${szemely.nem}</p>`;
    }

    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', submitForm);
});
