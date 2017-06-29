const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect(`mongodb://localhost:27017/TodoApp`, (err, db) => {
    if (err) {
        return console.log("Unable to connect to mongodb server", err);
    }
    console.log("Connected to mongodb server");
   
    // db.collection('Todos').find({
    //     _id: new ObjectID('5954c6b2e8866bbd8c15fbf2')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err)=>{
    //     console.log("Unable to fetch docs ", err);
    // });

    db.collection('Todos').find().count().then((count)=>{
        console.log(`Todos count ${count}`);
    },(err)=>{
        console.log("Unable to fetch docs ", err);
    });

    db.close();
}); //amazon webservices or heroku url or localhost url