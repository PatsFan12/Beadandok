class Etel{
    constructor(nev,ar,kategoria,osszetevok){
        this.nev = nev;
        this.ar = ar;
        this.kategoria = kategoria;
        this.osszetevok = osszetevok;
    }
}

var etelek = [];

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("submitButton").addEventListener("click",function(){
        var nevInput = document.getElementById("nev").value;
        var arInput = document.getElementById("ar").value;
        var kategoriaInput = document.getElementById("kategoria").value;
        var osszetevokInput = document.getElementById("osszetevok").value;

        var etel = new Etel(nevInput,arInput,kategoriaInput,osszetevokInput);
        etelek.push(etel);

        document.getElementById("nev").value = "";
        document.getElementById("ar").value = "";
        document.getElementById("kategoria").value = "";
        document.getElementById("osszetevok").value = "";

        var tablaTartalom = document.getElementById("etelTablaTartalom");
        var sor = document.createElement("tr");
        sor.innerHTML = `
            <td>${etel.nev}</td>
            <td>${etel.ar}</td>
            <td>${etel.kategoria}</td>
            <td>${etel.osszetevok}</td>
        `;
        tablaTartalom.appendChild(sor);
    })

    document.getElementById("listaButton").addEventListener("click",function(){
        etelek.forEach(etel => {
            console.log(etel);
          });
    })

})