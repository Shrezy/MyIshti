import mongoose from 'mongoose';

const Connection = async (username, password) => {
    console.log(username);
    console.log(password);
    const URL = `mongodb://${username}:${password}@ac-oz16yzn-shard-00-00.qntbcc3.mongodb.net:27017,ac-oz16yzn-shard-00-01.qntbcc3.mongodb.net:27017,ac-oz16yzn-shard-00-02.qntbcc3.mongodb.net:27017/?ssl=true&replicaSet=atlas-ieoo99-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;