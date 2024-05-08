class Kor {
    constructor(sugar) {
        this.sugar = sugar;
    }

    terulet() {
        return Math.PI * Math.pow(this.sugar, 2);
    }

    kerulet() {
        return 2 * Math.PI * this.sugar;
    }
}
document.addEventListener('DOMContentLoaded', function () {
    function submitForm() {
        const sugar = parseFloat(document.getElementById('sugar').value);

        if (isNaN(sugar)) {
            alert('Kérem, adjon meg egy érvényes számot a kör sugarához!');
            return;
        }

        const kor = new Kor(sugar);
        const korEredmenyekDiv = document.getElementById('korEredmenyek');
        korEredmenyekDiv.innerHTML = `<p class="fw-bold">Kör tulajdonságai:</p>
                                       <p>Terület: ${kor.terulet().toFixed(2)}</p>
                                       <p>Kerület: ${kor.kerulet().toFixed(2)}</p>`;
    }
    
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', submitForm);
});