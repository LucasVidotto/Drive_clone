import https from 'https'
import fs from 'fs'
import {logger} from './logger.js'

const PORT = process.env.PORT || 3000

const localHostSSL = {
    key: fs.readFileSync('./certificates/key.pem'),
    cert: fs.readFileSync('./certificates/cert.pem'),
}

const server = https.createServer(
    localHostSSL,//criando a rota
    (req, res) =>{  
        res.end('hello world')
    }
)
//instanciando o server, vai pegar o adress e a porta do serviço
const startServer = () =>{
    const{ address, port } = server.address()
    logger.info(`app running at https://${address}:${port}`)
}

server.listen(PORT, startServer)