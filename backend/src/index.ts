import express from "express";

import entityRoutes
from "./routes/entityRoutes";

import graphRoutes
from "./routes/graphRoutes";

import userRoutes
from "./routes/userRoutes";

import authRoutes
from "./routes/authRoutes";

import secretKeyRoutes
from "./routes/secretKeyRoutes";

import auditRoutes
from "./routes/auditRoutes";

import articleRoutes
from "./routes/articleRoutes";

import searchRoutes
from "./routes/searchRoutes";

import contextRoutes
from "./routes/contextRoutes";

import eventRoutes
from "./routes/eventRoutes";

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

app.use(
  "/api/users",
  userRoutes
);

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/secret-key",
  secretKeyRoutes
);

app.use(
  "/api/audit",
  auditRoutes
);

app.use(
  "/api/articles",
  articleRoutes
);

app.use(
  "/api/search",
  searchRoutes
);

app.use(
  "/api/context",
  contextRoutes
);

app.use(
  "/api/events",
  eventRoutes
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
