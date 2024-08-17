import express, { json } from 'express';
import { connect, Schema, model } from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

connect('mongodb://localhost:27017/passwordManager', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const passwordSchema = new Schema({
    website: String,
    username: String,
    password: String,
});

const Password = model('Password', passwordSchema);

app.post('/passwords', async (req, res) => {
    const newPassword = new Password(req.body);
    await newPassword.save();
    res.send(newPassword);
});

app.get('/passwords', async (req, res) => {
    const passwords = await Password.find();
    res.send(passwords);
});

app.put('/passwords/:id', async (req, res) => {
    const updatedPassword = await Password.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(updatedPassword);
});

app.delete('/passwords/:id', async (req, res) => {
    await Password.findByIdAndDelete(req.params.id);
    res.send({ message: 'Password deleted' });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
