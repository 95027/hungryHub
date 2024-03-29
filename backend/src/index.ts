import express, {Request, Response} from "express";
import cors from 'cors';
import 'dotenv/config';
import mongoose from "mongoose";
import userRoute from './routes/userRoute';


mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => console.log('connected to database'));

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/user/create', userRoute);

app.get('/test', async (req: Request, res: Response) => {
    res.json({"message": "hello"});
})

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})