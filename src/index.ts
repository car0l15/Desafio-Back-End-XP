import express from 'express';
import routes from './routes';
import middleware from './middleware';

const app = express();

app.use(express.json());

app.use(routes);

app.use(middleware.errorHandler);

const PORT = 3002;

app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default app;
