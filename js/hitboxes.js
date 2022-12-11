function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
        right: rect.right + window.scrollX,
        bottom: rect.bottom + window.scrollY
    };
}

//0 = dessous, 1 == droite, 2 = haut, 3 = gauche
function hitboxes(entity1, entity2){
    if (
        Math.round(getOffset(entity1).top).toFixed(0) === Math.round(getOffset(entity2).bottom).toFixed(0)
        && Math.round(getOffset(entity1).right)> Math.round(getOffset(entity2).left)
        && Math.round(getOffset(entity1).left)< Math.round(getOffset(entity2).right)
    ){return 0}
    else if(
        Math.round(getOffset(entity1).left).toFixed(0) === Math.round(getOffset(entity2).right).toFixed(0)
        && Math.round(getOffset(entity1).top) < Math.round(getOffset(entity2).bottom)
        && Math.round(getOffset(entity1).bottom) > Math.round(getOffset(entity2).top)

    )
    {return 1}
    else if (
        Math.round(getOffset(entity1).bottom).toFixed(0) === Math.round(getOffset(entity2).top).toFixed(0)
        && Math.round(getOffset(entity1).right)> Math.round(getOffset(entity2).left)
        && Math.round(getOffset(entity1).left)< Math.round(getOffset(entity2).right)
    )
    {return 2}
    else if (
        Math.round(getOffset(entity1).right).toFixed(0) === Math.round(getOffset(entity2).left).toFixed(0)
        && Math.round(getOffset(entity1).top) < Math.round(getOffset(entity2).bottom)
        && Math.round(getOffset(entity1).bottom) > Math.round(getOffset(entity2).top)
    )
    {return 3}
}

function takeDamagesHitboxes(entity1, entity2){
    if (
        Math.round(getOffset(entity1).top).toFixed(0) === Math.round(getOffset(entity2).bottom).toFixed(0)
        && Math.round(getOffset(entity1).right)> Math.round(getOffset(entity2).left)
        && Math.round(getOffset(entity1).left)< Math.round(getOffset(entity2).right)
    ){return 0}
    else if(
        Math.round(getOffset(entity1).left).toFixed(0) === Math.round(getOffset(entity2).right).toFixed(0)
        && Math.round(getOffset(entity1).top) < Math.round(getOffset(entity2).bottom)
        && Math.round(getOffset(entity1).bottom) > Math.round(getOffset(entity2).top)

    )
    {return 1}
    else if (
        Math.round(getOffset(entity1).bottom).toFixed(0) === Math.round(getOffset(entity2).top).toFixed(0)
        && Math.round(getOffset(entity1).right)> Math.round(getOffset(entity2).left)
        && Math.round(getOffset(entity1).left)< Math.round(getOffset(entity2).right)
    )
    {return 2}
    else if (
        Math.round(getOffset(entity1).right).toFixed(0) === Math.round(getOffset(entity2).left).toFixed(0)
        && Math.round(getOffset(entity1).top) < Math.round(getOffset(entity2).bottom)
        && Math.round(getOffset(entity1).bottom) > Math.round(getOffset(entity2).top)
    )
    {return 3}
}
