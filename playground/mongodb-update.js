const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect(`mongodb://localhost:27017/TodoApp`, (err, db) => {
    if (err) {
        return console.log("Unable to connect to mongodb server", err);
    }
   
    console.log("Connected to mongodb server");
   
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("59551b7be8866bbd8c16076c")
    // },{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((res)=>{
    //     console.log(res);
    // }).catch(error=>console.log(error));

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5954bca9f63e811e033a6cef')
    },{
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }).then((res)=>{
        console.log(res);
    });    

    //db.close();
}); //amazon webservices or heroku url or localhost url