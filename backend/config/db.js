import mongose from 'mongoose'
import colors from 'colors'

const connectDB = async () => {
    try{
        const conn = await mongose.connect('mongodb+srv://admin:hieuhayquen03@admin.o8rcig9.mongodb.net/test?retryWrites=true&w=majority',{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
      console.error(`Error: ${error.message}`.red.underline.bold)
            process.exit(1)
    }
}

export default connectDB