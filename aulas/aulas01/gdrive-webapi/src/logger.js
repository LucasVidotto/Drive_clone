//para a configuração do Pino
import pino from 'pino'

const logger = pino({
    prettyPrint: {//imprime mais bonito
    ignore: 'pid, hostname' //ignora o pid(numero do processo) e o host
    }
})

export{
    logger,
}
