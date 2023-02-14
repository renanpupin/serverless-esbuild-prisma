const {
    Prisma,
    PrismaClient
} = require('@prisma/client')

// import { PrismaClient, Prisma } from "../generated/client";

export const prisma = new PrismaClient({
    // datasources: {
    //     db: { url: process.env.NODE_ENV === 'test' ? DB_URL_TEST : DB_URL },
    // },
})
