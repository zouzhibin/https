/**
 * 公钥加密是为了数据安全
 * 私钥加密是为了验证签名
 * 实现一个RSA非对称加密算法
 * 加密用的秘钥和解密用的秘钥不一样
 * 但是他们有关系，你不能通过公钥算出秘钥
 * 两个质数相乘得到一个结果
 * p*q = K
 * 
 */

 let p =3,q=11;
 // 从数学上无法实现从N求出p和q
 let N = p*q //33
 let fN = (p-1)*(q-1) // 欧拉函数
 let e = 7 // 随意 挑一个指数e
 // {e,N} {7,33} 就成为我们的公钥 ，公钥可以发给任何人 ，是公开的
 // 公钥和秘钥 是一对 公钥加密的数据 要用秘钥解密，秘钥加密的数据要用公钥来解密
 // 我们可以用公钥去推算秘钥 但是前提是你得知道fN
 // e*d%fN == 1 说明就是我们要找的秘钥的 e

 for(var d=1;e*d%fN!==1;d++){
     
 }

 let data = 5
 let c = Math.pow(data,e)%N
 console.log('c',c)
 let original = Math.pow(c,d)%N
 console.log(original)
 console.log(d)