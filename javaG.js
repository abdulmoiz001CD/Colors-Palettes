const generateColorButton = document.getElementById("btn");

const generateDigitDigitHexColor = () => {

const hexChars=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

let hexColor="#";

for(let i = 0; i < 6; i++){ 
    const randomIndex = Math.floor(Math.random() * hexChars.length);
    hexColor += hexChars[randomIndex];
}

return hexColor;
}



const  generateFourSetDigits = () => {

    let colorArray =[];

    for(let i = 0; i < 4; i++){
        colorArray.push(generateDigitDigitHexColor());
    }

    return colorArray;
    }

   
 
    const generateColorsForFrontPage = () => {
    const colorContainerElement = document.getElementById("colorContainer");
    

    colorContainerElement.innerHTML = [];
    const Colors4 =   generateFourSetDigits();
    Colors4.forEach((value,i) => {
    
     const coloDiv = document.createElement("div");
     coloDiv.id = `color+${1+i}`;
     coloDiv.style.background=value;
     
     
    coloDiv.className="colorBox";
    const colorTag = document.createElement("p");
    colorTag.className="ColorTagsPra";
    colorTag.id = `color+${1+i}TagId`;
    colorTag.innerHTML =value;

    


    coloDiv.appendChild(colorTag)
    colorContainerElement.appendChild(coloDiv);
    }); 


    const copyColorToClipboard = (id) =>{

    const element = document.getElementById(id);

    navigator.clipboard.writeText(
        element.innerText
    ).then(()=>{
        alert("Clipboard To Copied")
    }).catch(()=>{
        alert("Failed To Copied")
    })


    }


   const ColorTagsPraEl = document.querySelectorAll(".ColorTagsPra");

   ColorTagsPraEl.forEach((item,i) => {
    item.addEventListener("click", () => copyColorToClipboard(`color+${1+i}TagId`));
   })

   };



   generateColorButton.addEventListener("click",generateColorsForFrontPage);





















