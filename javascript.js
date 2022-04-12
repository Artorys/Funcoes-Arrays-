function positions(firstPlace,secondPlace,lastPlace)
{
    if(firstPlace != "Daniel" && secondPlace == "Marcelo")
    {
        secondPlace = "Daniel"
        lastPlace = "Marcelo"

    }
    else if( firstPlace != "Daniel" && secondPlace == "Nobara")
    {
        secondPlace = "Daniel"
        lastPlace = "Nobara"
    }
    else if(firstPlace = "Marcelo" && secondPlace == "Daniel")
    {
        firstPlace = "Daniel"
        secondPlace = "Marcelo"
    }
    else if(firstPlace = "Nobara" && secondPlace == "Daniel")
    {
        firstPlace = "Daniel"
        secondPlace = "Marcelo"
    }
    else
    {
        firstPlace = competidores[0]
        secondPlace = competidores[1]
        lastPlace = competidores[2]
    }
    let firstPosition = 
    (
    `primeiro colocado : ${firstPlace}`
    )
    console.log(firstPosition)
    let secondPosition = 
    (
    `segundo colocado : ${secondPlace}`
    )
    console.log(secondPosition)
    let lastPosition = 
    (
    `terceiro colocado : ${lastPlace}`
    )
    console.log(lastPosition)
}   
let competidores = 
[
    "Daniel",
    "Marcelo",
    "Nobara"
]

positions(competidores[2],competidores[1],competidores[0])
