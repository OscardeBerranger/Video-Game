const personnage = document.querySelector('.character')
const box = document.querySelector('.box')
const ennemy = document.querySelector('.ennemy')

var r = document.querySelector(':root');
let mainPosX = 50;
let mainPosY = 50;



//Permet au personnage de se déplacer
document.addEventListener('keypress', (event)=>{
    let key = event.key ? event.key : event.key;
    if (key === 'z'&& hitboxes(personnage, box)!==0){
        mainPosY-=1
        r.style.setProperty('--var-posY', `${mainPosY}vh`);
    }else if (key === 's' && hitboxes(personnage, box)!==2){
        mainPosY+=1
        r.style.setProperty('--var-posY', `${mainPosY}vh`);
    }else if (key === 'd'&& hitboxes(personnage, box)!==3){
        mainPosX+=1
        r.style.setProperty('--var-posX', `${mainPosX}vh`);
    }else if (key === 'q' &&  hitboxes(personnage, box)!== 1){
        mainPosX-=1
        r.style.setProperty('--var-posX',`${mainPosX}vh`)
    }
})

setInterval(
    ()=>{
        let hit = takeDamages(personnage, ennemy);
        console.log(hit)
    }, 1000
)
