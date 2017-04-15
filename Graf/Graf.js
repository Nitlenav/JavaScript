'use strict'

function Graf(arr){
    let x, y;
    let obj; 

    for(let i = 0; i<arr.length; i++){
        x = arr[i][0];
        y = arr[i][1]; 
        
        obj = couple(x, y); 
    }
    return obj; 
}

let calculated = {}; 

function couple(x, y){

    let couple1, couple2; 
   
    if(calculated[x] && calculated[y]){
        couple1 = calculated[x];
        couple2 = calculated[y];
    }else if(calculated[x]){
        couple2 = new Node(y); 
        couple1 = calculated[x]; 
    }
    else if(calculated[y]){
        couple1 = new Node(x); 
        couple2 = calculated[y];
    }else{
        couple1 = new Node(x); 
        couple2 = new Node(y); 
    }
    
    couple1.partners.push(couple2); 
    couple2.partners.push(couple1); 
    
    calculated[couple1.value] = couple1;
    calculated[couple2.value] = couple2;

    return calculated; 

}

function Node(value){
    this.value = value; 
    this.partners = []; 
}


function searchDeep(obj){
    let roll;
    let searched = [];
    let searchedChild;  

    for(let key in obj){
        roll = obj[key]; 
        searched = smartMix(searched, [].push(roll.value)); 
        searchedChild = deepDeep(roll.partners); 

        searched = smartMix(searched, searchedChild)
    }
        
    return searched; 
}

let proxyCalculated = [];

function deepDeep(arr){    
    let roll;  

    for(let j=0; j<arr.length; j++){
        roll = arr[j];
        if(proxyCalculated.indexOf(roll.value) == -1){
            proxyCalculated.push(roll.value); 
            deepDeep(roll.partners)
        }
    }

    return proxyCalculated; 

}


function smartMix(where, what){
   
    for(let i=0; i<what.length; i++){
        if(where.indexOf(what[i]) == -1){
            where.push(what[i]); 
        }
    }

    return where; 
}

    /*
        поиск в ширину
    */
function searchWidth(obj){
    let listOfRoute = []; 

    for(key in obj){
        let roll = obj[key]; 

        if(roll.partners.length==1){
            listOfRoute.push("Из вершины " + roll.value + " можно прийти в вершину " + roll.partners[0].value); 
        }else if(roll.partners.length>1){
            let str = "Из вершины " + roll.value + " можно прийти в вершины ";
            let map = "";
            for(let i=0; i<roll.partners.length; i++){
                map += roll.partners[i].value + ", "
            }
             map = map.substring(0, map.length-2); 
             str = str + map + "."
             listOfRoute.push(str); 
        }
    }

    return listOfRoute; 
} 