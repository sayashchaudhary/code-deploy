import express from "express";
import bodyParser from "body-parser";
import { dbService } from "./services/db.service";
import { apiRoutes } from './routes/api.routes';

const app = express();

dbService

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//My Routes
app.use(apiRoutes);

app.get('/', (req, res) => {
  res.json('Testing Route')
});

export default app;
