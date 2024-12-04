import mongoose from 'mongoose';

const MONGODB_URI = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASS_WORD}@cluster0.eclbw.mongodb.net/blog-app-test?authSource=admin`;

// Improved error handling with descriptive message
if (!MONGODB_URI) {
  throw new Error('MongoDB connection URI is not defined in .env.local. Please set DB_USER_NAME and DB_PASS_WORD environment variables.');
}

let cachedDb = null;

export  async function connectToDatabase() {
  if (cachedDb) {
    console.log('yesss')
    return cachedDb;
  }

  try {
    
    const connection = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    cachedDb = connection;
    console.log('Connected to MongoDB');
    return cachedDb;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; // Re-throw the error for further handling
  }
}