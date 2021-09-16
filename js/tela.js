

function cancelar() {
    const confirmou = confirm('Tem certeza que deseja sair sem Salvar?')
    if (confirmou) {
        window.location.href = "tela01.html";
    }

}
function salvar() {

    const queryUrl = window.location.search;
    const params = new URLSearchParams(queryUrl);
    const id = params.get('id');


    const keyLocalStorage = 'cafe_acerta'
    const cafes = JSON.parse(localStorage.getItem(keyLocalStorage)) || []
    var nome = document.getElementById("newcoffe").value;

    if (document.getElementById("newcoffe").value.length < 1) {
        window.alert('Campo Descrição é obrigatório')
        document.getElementById("newcoffe").focus();
        return false


    }
    if (!id) {
        var nome = document.getElementById("newcoffe").value;
        const id = '4';

        const keyLocalStorage = 'cafe_acerta'
        const cafes = JSON.parse(localStorage.getItem(keyLocalStorage)) || []
        const cafe = {
            id,
            nome: nome,


        }
        cafes.push(cafe)
        localStorage.setItem(keyLocalStorage, JSON.stringify(cafes));

    }
    else {
        const newcafes = cafes.map(cafe => {
            if (+cafe.id === +id) {
                return {
                    id,
                    nome: nome,

                }
            }
            else {
                return cafe;
            }

        });
        localStorage.setItem(keyLocalStorage, JSON.stringify(newcafes));
        loadCafes();


    };
    window.alert('Show! Novo café registrado com sucesso')

    window.location.href = "tela01.html";
}


const loadCafes = () => {
    var corpoDaTabela = document.querySelector("tbody");
    corpoDaTabela.innerHTML = '';
    const cafesPadroes = []
    cafesPadroes.push(
        {
            id: '1', nome: 'Curto'
        },
        {
            id: '2', nome: 'Longo'
        },
        {
            id: '3', nome: 'Capuccino'
        }
    );



    const keyLocalStorage = 'cafe_acerta';
    const cafesLocalStorage = JSON.parse(localStorage.getItem(keyLocalStorage));
    const cafes = cafesLocalStorage || cafesPadroes;

    /* debugger */

    if (!cafesLocalStorage) {
        localStorage.setItem(keyLocalStorage, JSON.stringify(cafesPadroes));

    }



    for (let index = 0; index < cafes.length; index++) {
        const cafe = cafes[index];

        /*     debugger */

        var nome = cafe.nome;
        const id = cafe.id;


        var linha = document.createElement("tr");
        var campoID = document.createElement("td");
        var campoNome = document.createElement("td");
        var campoAcao = document.createElement("td");

        var botaoExcluir = document.createElement("button")
        botaoExcluir.innerText = 'Excluir'
        campoAcao.appendChild(botaoExcluir)
        botaoExcluir.addEventListener('click', () => {

            cafes.splice(index, 1);
            localStorage.setItem(keyLocalStorage, JSON.stringify(cafes));
            loadCafes();

        })

        var botaoEditar = document.createElement("button")
        botaoEditar.innerText = 'Editar'
        campoAcao.appendChild(botaoEditar)
        botaoEditar.addEventListener('click', () => {
            window.location.href = `tela02.html?id=${id}`;
        });

        var textoNome = document.createTextNode(nome);
        const textoId = document.createTextNode(id);
      
        campoNome.appendChild(textoNome);
        campoID.appendChild(textoId);

        linha.appendChild(campoID);
        linha.appendChild(campoNome);
        linha.appendChild(campoAcao);


        corpoDaTabela.appendChild(linha);
    }
}



const loadCafe = () => {
    const queryUrl = window.location.search;
    const params = new URLSearchParams(queryUrl);
    const id = params.get('id');

    const keyLocalStorage = 'cafe_acerta'
    const cafes = JSON.parse(localStorage.getItem(keyLocalStorage)) || []
    
    if (id) {
        const cafe = cafes.find(cafe => +cafe.id === +id);
        /* console.log(cafe); */
        const campoTexto = document.getElementById('newcoffe');
        campoTexto.value = cafe.nome;
    }

}

const update = () => {

    const keyLocalStorage = 'cafe_acerta'
    const cafes = JSON.parse(localStorage.getItem(keyLocalStorage)) || []
    var nome = document.getElementById("newcoffe").value;

    if (nome.length < 1) {
        window.alert('Campo Descrição é obrigatório');
        return false

    }
    if (!id) {
        var cafeid = cafe.id;n

        const cafe = {
            id: cafeid,
            nome: nome,
        }
        cafes.push(cafe)
        localStorage.setItem(keyLocalStorage, JSON.stringify(cafes));

        loadCafes();
    }
    else {
        const newcafes = cafes.map(cafe => {
            if (+cafe.id === +id) {
                return {
                    id,
                    nome: nome,

                }
            }
            else {
                return cafe;
            }

        });
        localStorage.setItem(keyLocalStorage, JSON.stringify(newcafes));
        loadCafes();


    }

}
