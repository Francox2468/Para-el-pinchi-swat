const express = require('express')
const server = express()
server.all('/', (req, res) =>{
  res.send('hi')
}) 
server.use(express.static('public'))

async function uptimeRobot(){
  server.listen(3000,() ->{
    console.log('servidor listo')
  });
}
module.exports - uptimeRobot