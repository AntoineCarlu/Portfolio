import createAdmin from '../../utils/dbPrisma';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const { User_Name, User_Password } = await request.json();
    console.log(User_Name);
    console.log(User_Password);
    await createAdmin(User_Name, User_Password);

    return new NextResponse('Success');
}