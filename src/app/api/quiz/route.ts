import prisma from '../../../lib/prisma';
import { QuestionType } from '../../../../prisma/dataTypes';
import { NextResponse, NextRequest } from 'next/server';

// export async function GET(
//   request: Request,
//   { params }: { params: { tags: string[] } }
// ) {
//   if (!params || !params.tags) {
//     const data: QuestionType[] = await prisma.quiz.findMany({
//       include: {
//         options: true,
//       },
//     });
//     return NextResponse.json({ questions: data });
//   }

//   const data: QuestionType[] = await prisma.quiz.findMany({
//     where: {
//       OR: params.tags.map((tag) => ({ tag })),
//     },
//     include: {
//       options: true,
//     },
//   });

//   prisma.$disconnect();

//   return NextResponse.json({ questions: data });
// }

//Post Quiz results when test is completed
export async function POST(request: Request) {
  const body = await request.json();
  const {
    userID_OR_Email,
    quizidused,
    correctanswers,
    incorrectanswers,
    tags,
    score,
    starttimer,
    finishedat,
  } = body;

  try {
    let existingUser = await prisma.user.findUnique({
      where: { id: userID_OR_Email },
      include: { completedquiz: true },
    });

    if (existingUser) {
      // Update the existing completed quiz record
      const updatedCompletedQuiz = await prisma.completedquiz.update({
        where: { id: existingUser.completedquiz[0].id },
        data: {
          quizidused,
          correctanswers,
          incorrectanswers,
          tags,
          score,
          starttimer,
          finishedat,
        },
      });
      return new Response(JSON.stringify({ message: 'Completed quiz record updated' }), { status: 200 });
    } else if (!existingUser) {
    // Create a new user and the completed quiz record
    const newUser = await prisma.fakeuser.create({
      data: {
        cookieid: userID_OR_Email,
        completedquiz: {
          create: {
            correctanswers,
            incorrectanswers,
            quizidused,
            tags,
            score,
            starttimer,
            finishedat,
          },
        },
      },
    });
    return new Response(
      JSON.stringify({ message: 'New user and completed quiz record created' }),
      { status: 200 }
    );
    }
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'An error occurred' }), {
      status: 500,
    });
  }
}
