var base=require('./base')
var Promise=require('bluebird')
var cfExports=require('../../bin/exports')

var setup=cfExports.then(function(exports){
    process.env.USERPOOL=exports["ENVOY-COGNITO-USERPOOL"]
    process.env.CLIENT=exports["ENVOY-COGNITO-CLIENT"]
    
    var param={
        UserName:"john",
        Password:"123$dDadadfasdf"
    }
    return param
})

exports.create=()=>params("Create")
exports.update=()=>params("Update")
exports.delete=()=>params("Delete")

function params(stage){
    return setup.then(param=>base("CognitoUser",stage,param))
}