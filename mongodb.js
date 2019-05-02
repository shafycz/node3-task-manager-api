// CRUD create read update delete


const {MongoClient,ObjectID}=require('mongodb')

const connectionURL ='mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{ useNewUrlParser: true}, (error,client)=>{
    if(error){
        return console.log('Unable to conenct to database')
    }
    
    const db = client.db(databaseName)


    // db.collection('users').deleteMany({
    //     age:27
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    db.collection('tasks').deleteOne({
        description:'Do my job'
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })

//   db.collection('users').updateOne({
//         _id:ObjectID('5cc8a02b9abd0c0388dda7e6')
//     },{
//         $inc:{
//             age:1
//         }
//     }).then((result)=>{
//         console.log(result)
//     }).catch((error)=>{
//         console.log(error)
//     })
    
    // db.collection('tasks').updateMany({
    //     completed: false
    // },{
    //     $set:{
    //         completed:true
    //     }
    // }
    // ).then((result)=>{
    //     console.log(result.modifiedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('users').findOne({_id: ObjectID('5cc8a7bc47614603b9ba6c11')},(error,user)=>{
    //     if(error){
    //         return console.log('Unable to find User')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({age:27}).toArray((error,users)=>{
    //     if(error){
    //         return console.log('Unable to find User')
    //     }
    //     console.log(users)
    // })

    // db.collection('tasks').findOne({_id:ObjectID('5cc8a2fd018eb0039d6786bf')},(error,task)=>{
    //     if(error){
    //         return console.log('Cannont find task')
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({completed:false}).toArray((error,tasks)=>{
    //     console.log(tasks)
    // })
   

})

