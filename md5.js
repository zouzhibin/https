let crypto = require('crypto')
let content = '123456'
let md5Hash = crypto.createHash('md5').update(content).update(content).digest('hex')
console.log('md5Hash',md5Hash,md5Hash.length)

let salt = '123456'
let sha1Hash = crypto.createHmac('sha256',salt).update(content).update(content).digest('hex')
console.log('sha1Hash',sha1Hash,sha1Hash.length)


// let md5Hash = crypto.createHash('md5').update(content+content).digest('hex')
// console.log('md5Hash',md5Hash,md5Hash.length)