const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect(`mongodb://localhost:27017/TodoApp`, (err, db) => {
    if (err) {
        return console.log("Unable to connect to mongodb server", err);
    }
    console.log("Connected to mongodb server");
   
   //deleteMany

//    db.collection('Todos').deleteMany({text:"eat lunch"}).then((result)=>{
//        console.log(result);
//    });

   //deleteOne -> deltes the first match

//    db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result)=>{
//     console.log(result);
//    });

   //findOneandDelete -> deletes the first match doc and return it

   db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
       console.log(result);
    })  

    //db.close();
}); //amazon webservices or heroku url or localhost url