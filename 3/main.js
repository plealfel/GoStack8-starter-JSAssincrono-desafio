var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

buttonElement.onclick = buscaRepositorios;

function buscaRepositorios() {
    listElement.innerHTML = '';
    var user = inputElement.value;
    axios.get(`https://api.github.com/users/${user}/repos`)
        .then(function (response) {
            console.log(response);
            for (ret of response.data) {
                var nomeElement = document.createElement('li');
                var nomeText = document.createTextNode(ret.name);
                nomeElement.appendChild(nomeText);
                listElement.appendChild(nomeElement);
            }
        })
        .catch(function (error) {
            console.log(error);
            var nomeElement = document.createElement('li');
            var nomeText = document.createTextNode(error);

            nomeElement.appendChild(nomeText);

            listElement.appendChild(nomeElement);
        })
}