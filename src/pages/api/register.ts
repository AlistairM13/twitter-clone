import bcrypt from 'bcrypt'
import { NextApiResponse, NextApiRequest } from "next"

import prisma from '@/libs/prismadb'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method != "POST") {
        return res.status(405).end()
    }
    try {
        const {email, username, name, password} = req.body

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data:{
                email, username, name, hashedPassword
            }
        })

        return res.json(user)

    } catch (err) {
        console.log(err)
        return res.status(400).end()
    }
}