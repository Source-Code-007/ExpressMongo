import app from './app'
import path from 'path'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config({ path: path.join(process.cwd(), '.env') })

// getting-started with mongoose
async function main() {
  await mongoose
    .connect(`${process.env.MONGO_URI}` as string)
    .then(() => console.log('Database connection successful'))
    .catch((e) =>
      console.log('Database connection lost for this err: ', e.message),
    )

  app.listen(process.env.PORT, () => {
    // console.log(process.cwd()); // current directory
    console.log(`Server running at ${process.env.PORT}`)
  })
}
main()
