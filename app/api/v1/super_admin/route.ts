import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api/v1/super_admin:
 *   post:
 *     summary: Create a new super admin
 *     tags: [SuperAdmin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 example: "Super"
 *               last_name:
 *                 type: string
 *                 example: "Admin"
 *               email:
 *                 type: string
 *                 example: "sa@gmail.com"
 *               phone_no:
 *                 type: string
 *                 example: "+1234567890"
 *               password:
 *                 type: string
 *                 example: "Pass@123"
 *               gender:
 *                 type: string
 *                 example: "Male"
 *               address:
 *                 type: string
 *                 example: "123 Main St, Anytown, USA"
 *               citizenship:
 *                 type: string
 *                 example: "USA"
 *               date_of_birth:
 *                 type: string
 *                 format: date
 *                 example: "1990-01-01"
 *     responses:
 *       201:
 *         description: Super admin created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 first_name:
 *                   type: string
 *                 last_name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 phone_no:
 *                   type: string
 *                 gender:
 *                   type: string
 *                 address:
 *                   type: string
 *                 citizenship:
 *                   type: string
 *                 date_of_birth:
 *                   type: string
 *                   format: date
 *                 role:
 *                   type: string
 *                 is_completed_verification:
 *                   type: boolean
 *       500:
 *         description: Error creating super admin
 */
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { first_name, last_name, email, phone_no, password, gender, address, citizenship, date_of_birth } = body;

        const user = await prisma.user.findFirst({ where: { email } });
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
    } catch (error) {
        console.log(`🚀 ~ file: route.ts:20 ~ error:`, error);
        return NextResponse.json({ error: 'Error creating super admin' }, { status: 500 });
    }
}
