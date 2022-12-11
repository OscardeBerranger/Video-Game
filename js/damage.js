
function takeDamages(ally, ennemy){
    if (hitboxes(ally, ennemy)){
        return 'hit'
    }else return 'non hit'
}
