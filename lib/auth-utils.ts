
import bcrypt from "bcrypt";
import { prisma } from "./prisma";



export const saltAndHashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}

export const getUserFromDb = async (email: string, password: string) => {
    console.log(`🚀 ~ file: auth-utils.ts:14 ~ password:`, password)
    console.log(`🚀 ~ file: auth-utils.ts:14 ~ email:`, email)
    const user = await prisma.user.findFirst({
        where: {
            email,
        },
    });
    // compare password
    const is_match = user?.password ? await bcrypt.compare(password, user.password) : false;
    if (!is_match) {
        return null;
    }
    return user;
}
