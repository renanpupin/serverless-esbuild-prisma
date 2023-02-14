// const {
//     Prisma,
//     PrismaClient
// } = require('@prisma/client')
import { PrismaClient, Prisma } from "../generated/client";
const prisma = new PrismaClient({
    // datasources: {
    //     db: { url: process.env.NODE_ENV === 'test' ? DB_URL_TEST : DB_URL },
    // },
})

module.exports.handler = async (event, context, callback) => {
    try {
        const users = await prisma.user.findMany({
            include: { profile: true }
        })
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                users,
                message: 'successs'
            })
        }
    } catch (error) {
        console.error(error)
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(error)
        }
    }
}