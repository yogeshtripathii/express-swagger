// Main app setup

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

// ✅ FIXED CORS (important)
app.use(cors());

app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);

// swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;