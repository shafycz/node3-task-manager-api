require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5ccb2bc858751d007cd2f8aa').then((task)=>{
    console.log(task)
    return Task.countDocuments({completed:false}) 
}).then((task2)=>{
    console.log(task2)
}).catch((e)=>{
    console.log(e)
})