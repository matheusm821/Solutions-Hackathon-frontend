const app = require('./app/app')



const port = 3000
app.listen(port || process.env.PORT, ()=>{
    console.log('SERVER LISTEN IN PORT 3000')
})