import "dotenv/config";
import { defineConfig } from "drizzle-kit";

/* Här sätter jag upp en config fil för drizzle, 
använder inställningar som passar till mitt project,
som tex vart mitt schema är och vilken databastyp jag använnder osv*/
export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./migrations",
  dialect: "sqlite",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_CONNECTION_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
});
