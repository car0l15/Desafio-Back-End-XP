import express from 'express';
import cors from 'cors';
import routes from './routes';
import httpErrorMiddleware from './middleware/errorHandler';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(httpErrorMiddleware);
const PORT = 3002;

app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default app;
