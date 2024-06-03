import { beforeEach, afterEach, it, expect, describe, vi } from "vitest";
import { Eloadas } from "./eloadas";
let eloadas
beforeEach(() => {
    eloadas = new Eloadas(2, 2)
})
describe('lefoglal', () => {
    it('True erteket kell adnia', () => {
        expect(eloadas.lefoglal()).toBeTruthy()
    })
    it('Ha minden foglalt false erteket varunk', () => {
        for (let index = 0; index < 4; index++) {
            eloadas.lefoglal()
        }
        expect(eloadas.lefoglal()).toBeFalsy()
    })
})

describe('szabadHelyek', () => {
    it('4-et kene vissza adnia', () => {
        expect(eloadas.szabadHelyek()).toBe(4)
    })
})

describe('getTeli', () => {
    it('Nincs tele', () => {
        expect(eloadas.getTeli()).toBeFalsy()
    })
    it('Tele van', () => {
        for (let index = 0; index < 4; index++) {
            eloadas.lefoglal()
        }
        expect(eloadas.getTeli()).toBeTruthy()
    })
})

describe('Foglalt', () => {
    it('error ures stringre (sorSzam)', () => {
        expect(() => eloadas.Foglalt("", 2)).toThrow("Ervenytelen")
    })
    it('error 0-ra (sorSzam)', () => {
        expect(() => eloadas.Foglalt(0, 2)).toThrow("Ervenytelen")
    })
    it('error null ertekre (sorSzam)', () => {
        expect(() => eloadas.Foglalt(null, 2)).toThrow("Ervenytelen")
    })
    it('error ha sorSzam > foglalas.length', () => {
        expect(() => eloadas.Foglalt(3, 2)).toThrow("Ervenytelen")
    })


    it('error ures stringre (helySzam)', () => {
        expect(() => eloadas.Foglalt(2, "")).toThrow("Ervenytelen")
    })
    it('error 0-ra (helySzam)', () => {
        expect(() => eloadas.Foglalt(2, 0)).toThrow("Ervenytelen")
    })
    it('error null ertekre (helySzam)', () => {
        expect(() => eloadas.Foglalt(2,null)).toThrow("Ervenytelen")
    })
    it('error ha helySzam > foglalas.length', () => {
        expect(() => eloadas.Foglalt(2, 3)).toThrow("Ervenytelen")
    })

    it('Szabad a keresett hely', () => {
        expect(eloadas.Foglalt(1, 1)).toBe(false)
    })
    it('Foglalt a keresett hely', () => {
        eloadas.foglalasok[1][1] = true;
        expect(eloadas.Foglalt(2, 2)).toBe(true)
    })
})

