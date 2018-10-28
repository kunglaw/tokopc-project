function getCurrency(value){
    value = value.toLocaleString()
    return "Rp."+value
}

module.exports = getCurrency