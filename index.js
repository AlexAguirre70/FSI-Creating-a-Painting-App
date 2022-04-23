

//set up the variable for the paiting section
let selColor ="orange"
let paintingE=document.querySelector('.painting')

// this will change the color of the pixel when clicked

paintingE.addEventListener('click',function (e)
 {
    e.target.style.backgroundColor=selColor

}
)
// get the div on the palette

let paletteE = document.querySelector('.palette')

//add an event listener to the palette div
paletteE.addEventListener('click', function(e)
{ 
    // short code approach
    selColor=e.target.id

    // Longer  Code approach  - just un-comment the code below

    /*
    if(e.target.id=="blue"){
        selColor="blue"

    }
    else if(e.target.id=="yellow"){
        selColor="yellow"
    }else if(e.target.id=="red"){
        selColor="red"
    }else if(e.target.id=="green"){
        selColor="green"
    } */
}
)
