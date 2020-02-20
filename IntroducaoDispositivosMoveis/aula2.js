console.log("Aula 2");
var languages = ['C','Javascript','PHP','Java'];
console.log(languages.length);


//Procura algo no vetor e retorna a posição
function findInArray(array, valueToFind){
    var index = array.findIndex(function(value){
        return value === valueToFind;
    });
    
    if(index===-1){
        console.log('Não foi encontrado no vetor');
    }else{
        console.log('Foi encontrado no index'+ index);
    }
}
findInArray(languages, 'PHP');
findInArray(languages, 'Assembly');

//Procura algo no vetor também, se encontrar retorna ele mesmo, se não undefined
var result = languages.find(function(value){
    return value === 'Java';
});
console.log("\n");
if(result){
    console.log("Encontrou o resultado",result);
}else{
    console.log("Não encontrou o resultado");
}

//console.log(result);



var users = [ 
    { id: 5, name: 'DOUGRAS'},
    { id: 6, name: 'Michael'},
    { id: 7, name: 'Ribamar'},
    { id: 8, name: 'Humilde'},
];

var foundUser =  users.find(function(user){
    return user.id ===5;
});
if(foundUser){
    console.log("Usuário encontrado: "+ foundUser.name);
}

//Array push do php
users.push({id:4, name: 'Blastoise'});
console.log(users);

//Remove o último elemento do vetor e retorna ele
var removedItem = users.pop();
console.log(users);
console.log("Elmento removido ", removedItem);

//Remove o primeiro elemento do vetor;
users.shift();
console.log(users);

//Adiciona um item no início do vetor
users.unshift({id:1, name:'primeiro'});
console.log(users);




