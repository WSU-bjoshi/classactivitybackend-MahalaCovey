import { createApp } from "./app.js";
import { env } from "./config/env.js";
import { initDB } from "./"


const app = createApp();


app.listen(env.PORT, async () => {
    await initDB();
    console.log(`Server runnning (${env.NODE_ENV}) at https:://localhost:${env.PORT}`);
})