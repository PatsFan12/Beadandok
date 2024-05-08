document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('vendeg_szam').addEventListener('input', eletkorMezoGeneralas);
    document.getElementById('koltseg_kalkulacio').addEventListener('click', Kalkulalas);
});

function eletkorMezoGeneralas() {
    var vendegSzam = parseInt(document.getElementById('vendeg_szam').value);
    var eletkorInputokDiv = document.getElementById('eletkor_inputok');
    eletkorInputokDiv.innerHTML = '';

    for (var i = 1; i <= vendegSzam; i++) {
        var inputLabel = document.createElement('label');
        inputLabel.textContent = 'Életkor ' + i + ':';

        var input = document.createElement('input');
        input.type = 'number';
        input.name = 'eletkor_' + i;
        input.min = '0';
        input.classList.add('form-control');

        var textNode = document.createTextNode(' év');

        eletkorInputokDiv.appendChild(inputLabel);
        eletkorInputokDiv.appendChild(input);
        eletkorInputokDiv.appendChild(textNode);
        eletkorInputokDiv.appendChild(document.createElement('br'));
    }
}

function Kalkulalas() {
    var szobaAr = parseInt(document.querySelector('input[name="szoba"]:checked').value);
    var vendegSzam = parseInt(document.getElementById('vendeg_szam').value);
    var furdoszolgaltatasokAr = 0;
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    checkboxes.forEach(function(checkbox) {
        furdoszolgaltatasokAr += parseInt(checkbox.value);
    });
    
    var osszkoltseg = (szobaAr * vendegSzam) + furdoszolgaltatasokAr;
    
    alert('Összköltség: ' + osszkoltseg + ' Ft');
}
