import express from 'express';
import routes from './routes';
import middleware from './middleware';

const app = express();

app.use(express.json());

app.use(middleware.error);

app.use(routes);

const PORT = 3000;

app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default app;
