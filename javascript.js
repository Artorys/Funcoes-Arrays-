function colocados(firstPlace,secondPlace,lastPlace)
{
    if(firstPlace == "Daniel")
    {
        firstPlace = competidores[2]
        console.log(`primeiro colocado :${firstPlace}
        ,
        Segundo colocado :${secondPlace}
        ,
        Terceiro colocado :${lastPlace}`)
    }
    else if(secondPlace == "Daniel")
    {
        secondPlace = firstPlace
        firstPlace = competidores[2]
        console.log(`primeiro colocado :${firstPlace}
        ,
        Segundo colocado :${secondPlace}
        ,
        Terceiro colocado :${lastPlace}`)
    }
    else if(lastPlace == "Daniel")
    {
        lastPlace = secondPlace
        secondPlace = competidores[2]
        console.log(`primeiro colocado :${firstPlace}
        ,
        Segundo colocado :${secondPlace}
        ,
        Terceiro colocado :${lastPlace}`)
    }
}
let competidores = 
[
    `Rafael`, 
    `Manoel`,
    `Daniel` 
]
/*coloque os competidores de acordo
com a lista competidores,altere a ordem se prescisar*/
colocados(competidores[0],competidores[2],competidores[1])