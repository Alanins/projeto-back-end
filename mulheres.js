const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Liliane Moreira',
        imagem: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRZcmlaOZxV_nbS5cWjzzCB1i3PnTRqawOv0-EzUWZ15gTTCyaua_Ngv5hutODmYy7y',
        minibio: 'Desenvolvedora e Bióloga'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'Fundadora da PrograMaria'
    },
    {
        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Senior Staff Software Engineer'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)