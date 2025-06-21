import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://emonPH:AURw9Y9CqdU0jeKx@cluster0.zyyhzcl.mongodb.net/libraryDB?retryWrites=true&w=majority&appName=Cluster0');
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Database connection error', err);
  }
};
