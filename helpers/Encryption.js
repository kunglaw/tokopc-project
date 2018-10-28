const crypto = require("crypto")

class Encryption{
    static generateHash(password, salt){
        return crypto.createHmac('sha256',salt)
                     .update(password)
                     .digest('hex');
    }

    static generateSalt(){
        return crypto.randomBytes(32)
    }
}

module.exports = Encryption