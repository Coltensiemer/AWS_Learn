// import { PrismaClient } from '@prisma/client';
// import { QuestionType } from '../../../../prisma/dataTypes';
// import { NextResponse } from 'next/server';

// export async function GET() {
//     const prisma = new PrismaClient();

//     try {
//         const data: QuestionType[] = await prisma.quiz.findMany({
//             where: {
//                 OR: [
//                     { tag: 'EC2' },
//                     { tag: 'Lambda' }
//                 ],
//             },
//             include: {
//                 options: true,
//             },
//         });

//         prisma.$disconnect();
        
        
//         return NextResponse.json({qustions: data}); 
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return NextResponse.error();
//     }
// }

