let body = document.querySelector("body")
let star = document.querySelector("#i")
function AtualizarTempo() {
    let Label = document.querySelector("#tempo")
    var data = new Date();

    var hora = data.getHours();         // 0-23
    var min = data.getMinutes();        // 0-59
    var seg = data.getSeconds();        // 0-59
    var str_hora = hora + ':' + min + ':' + seg;
    Label.textContent = str_hora;

    let label1 = document.querySelector("#atual")
    let imagem = document.querySelector("#img")
    let temp = document.querySelector("#temp")

    var imgs = ["https://cdn.stocksnap.io/img-thumbs/960w/architecture-house_1QJPG6GXWZ.jpg","https://cdn.stocksnap.io/img-thumbs/960w/road-rural_TAS2O83WG0.jpg","https://cdn.stocksnap.io/img-thumbs/960w/rural-road_KEWEE2DJ2D.jpg","https://cdn.stocksnap.io/img-thumbs/960w/apple-hand_OXWTHY7CJ2.jpg"]
    if (hora >= 19 && hora <= 23) {
        label1.textContent = "Noite";
        label1.style = "color: black;";
        body.style = "background-color: #0c1445";
        temp.style = "color: white"
        tempo = 0;
        imagem.src = imgs[tempo]


    } else if (hora >= 12 && hora <= 19) {
        label1.textContent = "Tarde";
        label1.style = "color: #cd7f32;";
        body.style = "background-color: #ffd27f";
        tempo = 1;
        imagem.src = imgs[tempo]


    } else if (hora >= 5 && hora <= 12) {
        label1.textContent = "Manhã";
        label1.style = "color: #7b68ee;";
        body.style = "background-color: #5c54a4";
        tempo = 2;
        imagem.src = imgs[tempo]

    } else if (hora >= 0 && hora <= 5) {
        label1.textContent = "Madrugada";
        label1.style = "color: #ffffff;";
        body.style = "background-color: #4c408e";
        tempo = 3;
        imagem.src = imgs[tempo]

    } else {
        label1.textContent = "Não encontrado"
        label1.style = "color: #cd7f32;"
        body.style = "background-color: #fffff"
    }

}

function removerEstrela() {
    document.getElementById('i1').remove()
    document.getElementById('i2').remove()

}
setInterval(AtualizarTempo)
