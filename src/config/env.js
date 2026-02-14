import dotenv from "dotenv";

dotenv.config();


function requireEnv(name){
    const value = process.env[name];
    if(!value){
        throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
}

export const env ={
    NODE_ENV: process.env.NODE_ENV ?? "development",
    PORT: Number(requireEnv("PORT")),
    DATABASE_HOST: (requireEnv("DATABASE_HOST")),
    DATABASE_USER: (requireEnv("DATABASE_USER")),
    DATABASE_PASSWORD: (requireEnv("DATABASE_PASSWORD")),    
    DATABASE_NAME: (requireEnv("DATABASE_NAME")),
};