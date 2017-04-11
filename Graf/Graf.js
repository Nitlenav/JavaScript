'use strict'



class Graf {
    
constructor (tops){
 console.log(tops[0]);
 console.log(tops[1]);   
 let message = {failure: 'Данное ребро присутствует'};
//this.node [] = tops[0], tops[1];
let masGraf = new Map ();

for(let countMas of tops){
let top = countMas[0];
let rev = countMas[1];
console.log(top);
console.log(rev);

if(!masGraf.has(top))
{
let masVal = [];
masGraf.set(top, masVal.push[rev])
console.log(masGraf)
}
else{
/*let masValueMap = masGraf.get(top)
for(let val of masValueMap){
    if (val === rev){ 
throw new Error(message.failure);
    }
    else{
        masGraf.set(top, masValueMap.push[rev])
        console.log(masGraf)
    }
    
}*/
 masGraf.set(top, masVal.push[rev])
}
}
}    
}


let graf = new Graf ([[0,2], [2,6], [0,3] ]);

//graf.dfs(graf.nodes[0]);

// другой вариант графа
//let graf = new Graf ([[0,3],[1,3],[2,3],[4,3],[5,4]]);
// graf.dfs(graf.nodes[4]);