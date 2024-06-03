export class Eloadas{
    foglalasok 
    constructor (sorokSzama,helyekSzama){
        this.foglalasok = new Array(sorokSzama).fill(false).map(() => new Array(helyekSzama).fill(false));
    }

    lefoglal() {
        for (let index = 0; index < this.foglalasok.length; index++) {
            let foglalas = this.foglalasok[index]
            for (let i = 0; i< foglalas.length; i++) {
                if (foglalas[i] == false) {
                    foglalas[i] = true
                    return true
                }
            }
        }
        return false
    }

    szabadHelyek(){
        let szabad = 0
        for (let index = 0; index < this.foglalasok.length; index++) {
            let foglalas = this.foglalasok[index]
            for (let i = 0; i< foglalas.length; i++) {
                if (foglalas[i] == false) {
                    szabad += 1
                }
            }
        }
        return szabad
    }

    getTeli(){
        let szabad = 0
        for (let index = 0; index < this.foglalasok.length; index++) {
            let foglalas = this.foglalasok[index]
            for (let i = 0; i< foglalas.length; i++) {
                if (foglalas[i] == false) {
                    szabad += 1
                }
            }
        }
        if (szabad == 0) {
            return true
        }
        return false
    }

    Foglalt(sorSzam,helySzam){
        
        if (sorSzam <= 0 || sorSzam == "" || sorSzam == null || sorSzam > this.foglalasok.length) {
            throw new Error("Ervenytelen parameter");
        }
        let foglalas = this.foglalasok[0]
        if (helySzam <= 0 || helySzam == "" || helySzam == null || helySzam > foglalas.length) {
            throw new Error("Ervenytelen parameter");
        }

        if (this.foglalasok[sorSzam-1][helySzam-1] == true) {
            return true
        }
        else{
            return false
        }
    }
}
