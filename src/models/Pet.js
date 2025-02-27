import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
    name: String,
    species: String,
    age: Number,
    adopted: Boolean
});

export default mongoose.model('Pet', petSchema);