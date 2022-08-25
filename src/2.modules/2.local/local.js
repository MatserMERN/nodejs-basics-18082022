var log = {
    info: function(info){
        console.log(`info : ${info}`)
    },
    warn: function(warn){
        console.log(`warn : ${warn}`)
    },
    error: function(error){
        console.log(`error : ${error}`)
    }
}

module.exports = log
// module.exports = 1
// module.exports = "Scott Desatnick"

module.exports.display = function(){
    
}