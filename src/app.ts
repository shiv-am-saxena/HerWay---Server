import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

app.use(
	cors({
		origin: process.env.CORS_ORIGIN,
		credentials: true
	})
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
	res.send('Hello hai re baba');
});
export { app };
