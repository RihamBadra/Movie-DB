
const express = require('express')
const app = express()
const port = 8000

app.listen(port, () => {
  console.log(`ok`) //khaldoun said leave console.log because it gives error when put res.send !!
})

app.get("/test", (req, res) => {
    res.send({
        status:200, 
        message:"ok"
    });
})

app.get("/time", (req, res) => {
    const time = new Date();
    const timess = `${time.getHours()}:${time.getSeconds()}`;
    const thetime = {
        status : 200,
        message : timess
    }
    res.send(thetime);
})

app.get("/hello/:id", (req, res) => {
    const message = `Hello, ${req.params.id}`
    const final = {
        status: 200,
        message: message
    }
    res.send(final)
})

app.get("/search", (req, res) => {
    let status, message, data, final, error
    if(req.query.s){
        status = 200;
        message = "ok";
        data = req.query.s;
        final = {
            status: status,
            message: message,
            data: data
        }
    } else {
        status = 500;
        message = "hey,you have to provide a search";
        error = true;
        final = {
            status: status,
            message: message,
            error: error
        }
    }
    res.send(final);
})

const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

app.get("/movies/create", (req, res) => {
    
})

app.get("/movies/read", (req, res) => {
    res.send({
        status: 200, 
        movie: movies 
    })
})

app.get("/movies/read/by-rating", (req, res) => {
    //sort by rate highest at top
    const readArr = [...movies];
    readArr.sort(function(a, b) {
        if (a.rating < b.rating) return 1;
        else if (a.rating > b.rating) return -1;
        return 0;
    });
    const result = {
        status: 200,
        data: readArr
    }
    res.send(result);
})

app.get("/movies/read/by-title", (req, res) => {
    //sort by title
    const readArr = [...movies];
    readArr.sort(function(a, b) {
        if (a.title < b.title) return -1;
        else if (a.title > b.title) return 1;
        return 0;
    });
    const result = {
        status: 200,
        data: readArr
    }
    res.send(result);
})


app.get("/movies/read/by-date", (req, res) => {
    //sort by date
    const readArr = [...movies];
    readArr.sort(function(a, b) {
        if (a.year < b.year) return -1;
        else if (a.year > b.year) return 1;
        return 0;
    });
    const result = {
        status: 200,
        data: readArr
    }
    res.send(result);
})

app.get("/movies/update", (req, res) => {
    
})

app.get("/movies/delete", (req, res) => {
    
})