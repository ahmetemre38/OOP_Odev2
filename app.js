class Nokta {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
class Cokgen {
    constructor(...koseler){ 
        this.noktalar = koseler;
    }

    uzunluk = (kose1,kose2) => {
        return Math.sqrt(((kose2.x-kose1.x)**2) + ((kose2.y-kose1.y)**2));
    }
    
    cevre = () => {
        let toplam=0;
        if (this.noktalar.length >= 2) {
            for (var i=0; i < this.noktalar.length-1; i++) {
                toplam += this.uzunluk(this.noktalar[i],this.noktalar[i+1]);
            };
            if (this.noktalar.length > 2)
                toplam += this.uzunluk(this.noktalar[0],this.noktalar[this.noktalar.length-1]);        
        };
        return toplam;
    }
}

//4+4+3+3=14 seklindeki dikdortgenin kose noktalari asagidadir.
let dikdortgen = new Cokgen(new Nokta(1,1), new Nokta(5,1), new Nokta(5,4), new Nokta(1,4))

console.log(dikdortgen.cevre());
