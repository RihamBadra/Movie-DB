
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
    if(req.query.s){
        data = req.query.s;
        final = {
            status: 200,
            message: "ok",
            data: data
        }
    } else {
        final = {
            status: 500,
            message: "hey,you have to provide a search",
            error: true
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

app.get("/movies/read/id/:id", (req, res) => {
    if(req.params.id >= 0 && req.params.id < movies.length) {
        result = {
            status: 200,
            data: movies[req.params.id]
        }
    } 
    else {
        result = {
            status: 400,
            error: true,
            message: `The movie ${req.params.id} doesn't exist in the list !!`
        }
    }
    res.send(result);
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
    const response= {
        status:404, error:true, message:'Enter an ID please'
    };
    res.status(404);
    res.send(response);
})

app.get("/movies/create", (req,res) => {
    const movie = {
      title : req.query.title,
      year : req.query.year,
      rating : req.query.rating
    };
    if(movie.rating == undefined) {
      movie.rating = 4;
    }
    if ((movie.title) == 'undefined' || (movie.year == 'undefined') ||  (isNaN(movie.year)) || (movie.year.toString().length !== 4)){
      res.json({status:403, error:true, message:'you cannot create a movie without providing a title and a year'});
      console.log(res.json)
    }
    else{
      movies.push(movie);
      res.send(movie);
      res.json({status: 200, message: 'ok' , data: movies})
    }
  });

  app.get("/movies/delete/:id", (req,res) => {
    const id = parseInt(req.params.id);
    if (id>movies.length || id<=0){
       res.send({status:404, error:true, message:`the movie ${id} does not exist`})
    }else{
        movies.splice(id-1,1);
        res.send(movies);
    }
 });