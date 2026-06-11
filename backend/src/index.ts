import express from "express";

import entityRoutes
from "./routes/entityRoutes";

import graphRoutes
from "./routes/graphRoutes";

const app = express();

app.use(
  express.json()
);

app.get(
  "/health",
  (_req, res) => {

    res.json({
      status: "ok"
    });
  }
);

app.use(
  "/api/entities",
  entityRoutes
);

app.use(
  "/api/graph",
  graphRoutes
);

const PORT = 3000;

app.listen(
  PORT,
  () => {

    console.log(
      `Afriseek API running on port ${PORT}`
    );
  }
);
