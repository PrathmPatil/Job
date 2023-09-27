import colors from 'colors'
import mongoose from 'mongoose'

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.Mongo_URL)
        console.log(`connected to mongodb batabase ${mongoose.connection.host}`.bgMagenta )
    }catch(error)
    {
        console.log(`MongoDB Error ${error}`.bgRed.white)
    }
}
export default connectDB