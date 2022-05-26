const prompt = require('prompt-sync')({ sigint: true });


let entry = (prompt("Do you want to combine a color or deconstruct a color?:  ")); //combine



if (entry === "combine") {
    let color1 = (prompt( " 1st color: red, blue, yellow? :"));
    let color2 = (prompt("2nd color: red, blue, yellow?: "));
    if((color1 === 'blue' && color2 === 'red') || (color1 === 'red' && color2 === 'blue'))
    {console.log(" red + blue = purple")}

 else if ((color1 === 'blue' && color2 === 'yellow') || (color1 === 'yellow' && color2 === 'blue'))

    {console.log(" blue + yellow = green")}
    else if ((color1 === 'red' && color2 === 'yellow') || (color1 === 'yellow' && color2 === 'red')){
        console.log(" red + yellow = orange")
    }
    else console.log ("error") 
}


  else (entry === "deconstuct") 
        let singleColor = (prompt(" Pick a single color: purple, orange, green: "));
        if(singleColor === 'purple') {
            console.log(" purple = red + blue")
        } else if (singleColor === 'green'){
            console.log(" green = yellow + blue")
        } else if (singleColor === 'orange'){
            console.log(" orange = red + yellow ")
        } else {
            console.log (" error ")
        }
    

















































