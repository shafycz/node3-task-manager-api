require('../src/db/mongoose')
const User = require('../src/models/user')

//5ccb0abbe8951600394b4d4a

User.findByIdAndUpdate('5ccb0abbe8951600394b4d4a',{age:1}).then((user)=>{
    console.log(user)
    return User.countDocuments({age:1})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})