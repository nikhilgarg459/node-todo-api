const {MongoClient} = require('mongodb');

MongoClient.connect(`mongodb://localhost:27017/TodoApp`, (err, db) => {
    if (err) {
        return console.log("Unable to connect to mongodb server", err);
    }
    console.log("Connected to mongodb server");
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    },(err,res)=>{
        if(err){
            return console.log("Unable to insert todo",err);
        }

        console.log(JSON.stringify(res.ops,undefined, 2));
    });

    db.collection('Users').insertOne({
        name: "Nikhil",
        age: 24,
        location: "Bangalore"
    }, (err, res) => {
        if (err) {
            return console.log("Unable to insert todo", err);
        }

        console.log(JSON.stringify(res.ops, undefined, 2));
    });


    db.close();
}); //amazon webservices or heroku url or localhost url