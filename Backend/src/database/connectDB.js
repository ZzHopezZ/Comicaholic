const mongoose = require('mongoose')
async function connectDB(){
    await mongoose.connect('mongodb://127.0.0.1/comicsDatabase', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then(()=>{
          console.log("CONNECTION OPEN")
      }).catch(err => {
          console.log("Error on connecting mongo")
          console.log(err)
      })
}

module.exports = {connectDB}