import mongoose from 'mongoose';

const User = new mongoose.Schema({
    name: { type: String },
    phone: { type: String, required: true },
    cr_date: { type: Number, default: Date.now },
    refresh_token: { type: String }
})
export default mongoose.model('User', User);
