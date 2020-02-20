var users = [
    { name: 'Clodovil Cunha', age:37},
    { name: 'Massas Cunha', age:6321},
    { name: 'Michael Elfen Ford', age:200},
];

var user = { name: 'Charmander', age:1};

console.log(users);

console.log(user);


console.log(JSON.stringify(users,null,1));

console.log(JSON.stringify(user));

var pokemon = JSON.parse('{"name":"Charmander","age":1}');
console.log(pokemon);


//Tipo da requisição (GET), URL
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/WladimirOSZ');
// Parâmetro da requisição
xhr.send(null);

xhr.onreadystatechange = function(){
    // 4-> Operação concluída
    if(xhr.readyState===4){
        //console.log(xhr.responseText);
        console.log(JSON.parse(xhr.responseText));
        var response = JSON.parse(xhr.responseText);
        console.log(response.id);
    }
}

// Promises

var myPromise = function(username){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/'+username);
        // Parâmetro da requisição
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState===4){
                if(xhr.status===200){
                    //Sucesso
                    var response = JSON.parse(xhr.responseText);
                    resolve(response.id);
                }else{
                    //Erro
                    reject('Erro na requisição');
                }
            }
        }



        //resolve -> função que será chamada se tiver sucesso
        //reject -> função que será chamada se houver erros
        

    });
}

myPromise('lucasmoura-prof').then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });






axios.get('https://api.github.com/users/WladimirOSZ')
    .then(function(response){
        console.log("axios",response);
        console.log(response.data);
    })
    .catch(function(error){
        console.log("axios",error);
    })


setInterval(function(){
    console.log('Código que será executado após 3s');
},3000);



