import express from "express";

const app = express();

// app.get( '/', (req , res) => {
//     res.send("server is ready")
// });

app.use(express.static('dist')); // bad practice

// get a list of 5 jokes

app.get('/api/jokes' , (req , res) =>{

    const jokes = [
        {
            "id": 1,
            "title": "A Joke",
            "content": "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            "id": 2,
            "title": "Another Joke",
            "content": "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            "id": 3,
            "title": "Yet Another Joke",
            "content": "Why don't skeletons fight each other? They don't have the guts."
        },
        {
            "id": 4,
            "title": "Funny Joke",
            "content": "What do you call fake spaghetti? An impasta!"
        },
        {
            "id": 5,
            "title": "Last Joke",
            "content": "Why did the math book look sad? Because it had too many problems."
        }
    ];

    res.send(jokes);
  
});

const port = process.env.PORT || 3000;

app.listen(port , () =>{
    console.log(`listening on ${port}`);
})