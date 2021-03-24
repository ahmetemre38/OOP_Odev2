class Nokta {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
uzunluk = (kose1,kose2) => {
    return Math.sqrt(((kose2.x-kose1.x)**2) + ((kose2.y-kose1.y)**2));
}

let noktalar = [];
toplamMesafe = (noktalar) => {
    let toplam=0;
    if (noktalar.length >= 2) {
        for (var i=0; i < noktalar.length-1; i++) {
            toplam += uzunluk(noktalar[i],noktalar[i+1]);
        }
        if (noktalar.length > 2)
            toplam += uzunluk(noktalar[0],noktalar[noktalar.length-1]);        
    }
    return toplam;
}
//4+4+3+3=14 seklindeki dikdortgenin kose noktalari asagidadir.
noktalar.push(new Nokta(1,1));
noktalar.push(new Nokta(5,1));
noktalar.push(new Nokta(5,4));
noktalar.push(new Nokta(1,4));
console.log(toplamMesafe(noktalar));
