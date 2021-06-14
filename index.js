
const express = require('express')
const app = express()
const port = 8000

app.listen(port, () => {
  console.log(`ok`)
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