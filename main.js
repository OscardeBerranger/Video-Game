const personnage = document.querySelector('.personnage')
const box = document.querySelector('.box')

let mainPosX = 50;
let mainPosY = 50
var r = document.querySelector(':root');

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}

function hitboxes(){
    if (Math.round(getOffset(personnage).left).toFixed(0) === Math.round(getOffset(box).left).toFixed(0)){
        return true
    }else return false
}

document.addEventListener('keypress', (event)=>{
    let key = event.key ? event.key : event.key;
    if (key === 'z'&& hitboxes()===false){
        mainPosY-=1
        r.style.setProperty('--var-posY', `${mainPosY}vh`);
    }else if (key === 's'&& hitboxes()===false){
        mainPosY+=1
        r.style.setProperty('--var-posY', `${mainPosY}vh`);
    }else if (key === 'd'&& hitboxes()===false){
        mainPosX+=1
        r.style.setProperty('--var-posX', `${mainPosX}vw`);
    }else if (key === 'q'&& hitboxes()===false){
        mainPosX-=1
        r.style.setProperty('--var-posX',`${mainPosX}vw`)
    }
    console.log(getOffset(personnage).left, getOffset(box).left)

})

