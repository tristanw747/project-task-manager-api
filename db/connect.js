import mongoose from "mongoose";



export const connectDB = (url) =>{
  return mongoose.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

// .then(() => console.log('CONNECTED TO THE DB...'))
// .catch((err) => console.log(err))

