import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

const data = {
    "first_name": "Super",
    "last_name": "Admin",
    "email": "sa@gmail.com",
    "phone_no": "+1234567890",
    "password": "Pass@123",
    "gender": "Male",
    "address": "Pune",
    "citizenship": "Indian",
    "date_of_birth": "1990-01-01"


}
export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log(`🚀 ~ file: route.ts:97 ~ body:`, body)
        const { first_name, last_name, email, phone_no, password, gender, address, citizenship, date_of_birth } = body;

        const user = await prisma.user.findFirst({ where: { email } });
        console.log(`🚀 ~ file: route.ts:25 ~ user:`, user)
        if (user) {
            throw new Error('User already exists');
        }

        // first hash the password
        const hashed_password = await bcrypt.hash(password, 10);


        await prisma.user.create({
            data: {
                first_name,
                last_name,
                email,
                phone_no,
                password: hashed_password,
                gender,
                address,
                citizenship,
                date_of_birth: new Date(date_of_birth),
                role: 'SuperAdmin',
                is_completed_verification: true,
            },
        });

        return NextResponse.json({
            message: 'Super admin created successfully',
        }, { status: 201 });
    } catch (error: any) {
        console.log(`🚀 ~ file: route.ts:20 ~ error:`, error.message);
        return NextResponse.json({ error: 'Error creating super admin' }, { status: 500 });
    }
}
