require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5ccb2bc858751d007cd2f8aa').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false}) 
// }).then((task2)=>{
//     console.log(task2)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskandCount = async (id) =>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskandCount('5ccb4b85a9befa01f1bc5208').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})