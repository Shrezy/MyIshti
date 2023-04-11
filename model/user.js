import mongoose from 'mongoose';
import pkg from 'validator';

const { isEmail } = pkg;

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate: [ isEmail, 'invalid email' ],
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});


const user = mongoose.model('user', userSchema);

export default user;