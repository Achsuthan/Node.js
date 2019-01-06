var _ = require('underscore')

//first check the core module 
//second check with the file or Directory
//thrid check the node_module
//if all of the above are not avaialbe it will prompt the error message 

var result = _.contains([1,2,3,4,5,_])
console.log(result) 