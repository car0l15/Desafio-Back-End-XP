import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes';
import httpErrorMiddleware from './middleware/errorHandler';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(httpErrorMiddleware);
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default app;
