//cargar txt

document.querySelector('#txtBtn').addEventListener('click', cargarTxt);

function cargarTxt(){
    fetch('datos.txt')
        .then(function (res) {
            return(res.text());//aqui no me dará nada.. solo me dira que es una promesa, y que necesita un then
        })
        .then(function (data) {
            console.log(data);
            document.querySelector('#resultado').innerHTML = data;
        })
        .catch(function(error){
            console.log(error);
        }) 
}

//cargar json

document.querySelector('#jsonBtn').addEventListener('click', cargarJSON);

function cargarJSON(){
    fetch('empleados.json')
        .then(function (res) {
            return res.json();
        })
        .then(function(data){
            /* console.log(data); */
            let html ='';
            data.forEach(empleado =>{
                html+= `<p>${empleado.nombre} : ${empleado.puesto} </p>`;
            });

            document.querySelector('#resultado').innerHTML = html;
        })
        .catch(function (error) {
            console.log(error);
        })
}


//consumiendo de una REST API
document.querySelector('#apiBTN').addEventListener('click', mostrarAPI);

function mostrarAPI(){
    fetch('https://picsum.photos/v2/list')
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            let html ='';

            data.forEach(item => {
                html+= `<li>
                            <a href="${item.url}" >${item.author}</a>
                        </li>`;
            })
            document.querySelector('#resultado').innerHTML = html;
        })
        .catch(error =>{
            console.log(error);
        })
            
}