const url = "https://merlinvizsga.hu/api/pizza/pizza"
const vevourl = "https://merlinvizsga.hu/api/pizza/vevo";
const kepek = [
    { key: "/kepek/pizza1.jpg"},
    { key: "/kepek/pizza2.jpg"},
    { key: "/kepek/pizza3.jpg"},
    { key: "/kepek/pizza4.jpeg"},
    { key: "/kepek/pizza5.jpg"}
]
document.addEventListener("DOMContentLoaded",() =>{
    function lekerdezes(){
        fetch(url)
        .then(x => x.json())
        .then(y => kartyak(y));
    }

    lekerdezes();
    function kartyak(y){
        let kartyak = "";
        y.forEach(element => {
            let kartya = `
            <div class="card col" style="width: 18rem;">
                <img src="${kepek[element.pazon - 1].key}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p>${element.pnev}</p>
                    <p>${element.par} Ft</p>
                    <button class="btn btn-success">Kiválasztás</button>
                </div>
            </div>`
            kartyak += kartya;
        });
        document.getElementById("kartyak").innerHTML= kartyak;
    }
    const registrationForm = document.getElementById("registration-form")
    registrationForm.addEventListener("submit", (event) =>{
        event.preventDefault();
        const vnev = document.getElementById("vnev").value;
        const vcim = document.getElementById("vcim").value;
 
        const formData = {
            "vnev": vnev,
            "vcim": vcim
        }
 
        fetch(vevourl, {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then(
            response =>{
                if(!response.ok){
                    throw new Error('Network response was not ok');
                }
                alert("Sikeres regisztráció")
                return response.json();
            }
        )
        .then(newUserData =>{
            console.log(newUserData)
        })
    })
})