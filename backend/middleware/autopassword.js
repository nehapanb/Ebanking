const autoPassword = ()=>{
    let pass = ""
    let string = "qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM"
    for(let i = 0 ; i<8 ; i++)
    {
        let str = Math.floor(Math.random()*string.length)
        pass  += string.charAt(str)
    }
    return pass;
}




module.exports = autoPassword


