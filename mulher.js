const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Liliane Moreira',
        imagem: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRZcmlaOZxV_nbS5cWjzzCB1i3PnTRqawOv0-EzUWZ15gTTCyaua_Ngv5hutODmYy7y',
        minibio: 'Bióloga e Desenvolvedora'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)