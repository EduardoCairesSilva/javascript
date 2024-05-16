function retornaData(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })

}

try {
    const data = new Date('01-01-1970 00:00:01');
    const hora = retornaData();
    console.log(hora)
} catch(e) {
    console.log('Error de instância de data')
} finally {
    console.log('Tenha um bom dia.')
}

