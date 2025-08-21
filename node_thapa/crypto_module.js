const crypto = require("crypto");
const randomValue = crypto
.randomBytes(8).toString("hex");
console.log(randomValue);
const hashValue = crypto
.createHash("sha256")
.update("Anandkumar")
.digest("hex");
console.log(hashValue); 
// 518d93558b4cf9f13f10c6212714a47fa134c5409791059ed9fa4465e63464d6
const hashValue1 = crypto
.createHash("sha256")
.update("Anandkumar")
.digest("hex");
console.log(hashValue1); 
//518d93558b4cf9f13f10c6212714a47fa134c5409791059ed9fa4465e63464d6