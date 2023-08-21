exports.homePage = (req,res) =>{
    res.send(
        `
        <form action = "/" method="POST">
        Nome: <input type="text" name="nome">
        Outro campo: <input type="text" name="JOJO">
        <button> Enviar </buttons>
        </form>
        `
    )
}

exports.actionPost = (req,res) =>{
    res.send('Isso veio de um post')
}