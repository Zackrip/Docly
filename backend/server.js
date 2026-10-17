import app from "./src/app.js";
import dotenv from "dotenv";
import qdrantClient from "./src/configs/qdrant.js";
import { connectDB } from "./src/configs/postgres.database.js"
import { sequelize } from "./src/configs/postgres.database.js";

dotenv.config({ quiet: true });

connectDB();
await sequelize.sync();
try {
  
  const collections = await qdrantClient.getCollections();
  console.log("Qdrant connected ✅");
  console.log("Collections:", collections);
} catch (error) {
  console.error("Qdrant connection failed ❌", error.message);
}

app.listen(process.env.PORT, () => {
  console.log("Server is running on Port", process.env.PORT);
});
