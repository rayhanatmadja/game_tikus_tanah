const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const papanSkor = document.querySelector('#skor');
const boingSfx = document.querySelector('#boing');

let tanahSebelumnya;
let selesai;
let skor;

// fungsi bilangan random
function bilRandom(tanah){
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];
    if(tRandom == tanahSebelumnya){
        bilRandom(tanah);
    }else{
        tanahSebelumnya = tRandom;
    }
    return tRandom;
}

function randomWaktu(min, max){
    return Math.round(Math.random() * (min - max) + min);
}

// memunculkan tikus
function munculTikus(){
    const tRandom = bilRandom(tanah);
    tRandom.classList.add('muncul');
    const rWaktu = randomWaktu(500, 1000);

    setTimeout(() => {
        tRandom.classList.remove('muncul');
        if(!selesai) {
            munculTikus();
        }
    }, rWaktu);
}

function mulaiGame(){
    selesai = false;
    skor = 0;
    papanSkor.innerHTML = 0;
    munculTikus();
    setTimeout(() => {
        selesai = true;
    }, 10000);
}

function pukulTikus(){
    skor++;
    papanSkor.innerHTML = skor;
    boingSfx.play();
    this.parentNode.classList.remove('muncul');
}

tikus.forEach(satuTikus => {
    satuTikus.addEventListener('click', pukulTikus)
});