let {generateKeyPairSync,privateEncrypt,publicDecrypt} = require('crypto')

// 生成一对秘钥对 ，一个是公钥 一个是私钥

let rsa = generateKeyPairSync('rsa',{
    modulusLength:1024,
    publicKeyEncoding:{
        type:"spki",
        format:'pem' // base64格式的公钥
    },
    privateKeyEncoding:{
        type:"pkcs8",
        format:"pem",
        cipher:"aes-256-cbc",
        passphrase:"passphrase"
    }
})
let message ='hello'
// 私钥加密
let encryptedMessage = privateEncrypt({
    key:rsa.privateKey,passphrase:"passphrase"
},Buffer.from(message,'utf8'))

console.log('encryptedMessage',encryptedMessage)
// 公钥解密
let decryptedMessage = publicDecrypt(rsa.publicKey,encryptedMessage)
console.log('decryptedMessage',decryptedMessage.toString())