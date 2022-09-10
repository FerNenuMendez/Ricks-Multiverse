
const inputIndex=document.getElementById("inputbusqueda")
const btnSearch=document.getElementById("buscar")
const resultadosDom=document.getElementById("resultados")
const sectionR=document.getElementById("sectionResultados")

const cartaAlHtml=(array)=>{
    const arrayFinal = array.reduce((acc,element)=>{
        return acc+`
        <div class="card" id=${element.id}>
            <img class="cardimg" src=${element.image} alt=${element.name}>
            <h3 class="card__h3">${element.name}</h3>
            <p class="card__p">Species: ${element.species}</p> 
            <p class="card__p">Status: ${element.status}
            <p class="card__p">Location: ${element.location.name}</p>           
        </div>`
    },"") 
    console.log(arrayFinal)
    return arrayFinal
}

const busquedaDePersonaje=()=>{
    fetch(`https://rickandmortyapi.com/api/character/?name=${inputIndex.value}`)
    .then(res=>res.json())
    .then(data=>{
        resultadosDom.innerHTML=cartaAlHtml(data.results)
    })

} 

const h2intro=document.getElementById("h2intro")
const nuevaBusqueda=()=>{   
    h2intro.style.display="none"
    sectionR.style.display="flex"
}

btnSearch.onclick=()=>{
    busquedaDePersonaje()
    nuevaBusqueda()
}