 

const changeBorder = (number) => { 

const label = document.getElementById(`${number}`)
debugger;
switch(label.textContent){
   
    case "P":
        for(i =2; i<=4;i++){
            const oldLabel = document.getElementById(`${i}`)
            oldLabel.classList.remove("label-border")
        }
        label.classList.add("label-border");
        break;
    case "M": 
        for(i =3; i<=4;i++){
            const oldLabel2 = document.getElementById(`${i}`)
            const oldLabel3 = document.getElementById(`1`)
            oldLabel2.classList.remove("label-border")
            oldLabel3.classList.remove("label-border")
        }
        label.classList.add("label-border");
        break;

    case "G": 
        for(i = 1; i<=2;i++){
            const oldLabel4 = document.getElementById(`${i}`)
            const oldLabel5 = document.getElementById(`4`)
            oldLabel4.classList.remove("label-border")
            oldLabel5.classList.remove("label-border")
        }
        label.classList.add("label-border");
        break;
    case "GG": 
        for(i =1; i<=3;i++){

            const oldLabel6 = document.getElementById(`${i}`)
            oldLabel6.classList.remove("label-border")
        }
        label.classList.add("label-border");
        break;
}
    return label;
   
} 


