import express from "express";
import config from "./config";
import fiscaliasRoutes from "./routes/fiscalias.Routes";

const cors = require('cors')

//
import { router as fiscaliasRouter } from "./routes/fiscalias.Routes";

const app = express();

// Settings
app.set("port", config.port);

// Middlewares
app.use(express.json());
app.use("/api", fiscaliasRouter);
app.use(express.urlencoded({ extended: false }));

app.use(cors());

// Routes
app.use(fiscaliasRoutes);

export default app; 