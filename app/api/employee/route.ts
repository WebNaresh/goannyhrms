import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const dummy_employees = [
            { id: 1, name: 'John Doe', position: 'Software Engineer', salary: 75000 },
            { id: 2, name: 'Jane Smith', position: 'HR Manager', salary: 65000 },
            { id: 3, name: 'Mike Johnson', position: 'Product Manager', salary: 85000 },
        ];
        return NextResponse.json(dummy_employees, { status: 200 });
    } catch (error) {
        console.log(`🚀 ~ file: route.ts:12 ~ error:`, error)
        return NextResponse.json({ error: 'Error fetching employees' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, position, salary } = body;

        const dummy_new_employee = {
            id: 4,
            name,
            position,
            salary
        };

        return NextResponse.json(dummy_new_employee, { status: 201 });
    } catch (error) {
        console.log(`🚀 ~ file: route.ts:31 ~ error:`, error)
        return NextResponse.json({ error: 'Error creating employee' }, { status: 500 });
    }
}