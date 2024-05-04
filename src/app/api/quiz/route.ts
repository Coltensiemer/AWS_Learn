import prisma from '../../../lib/prisma';
import { QuestionType } from '../../../../prisma/dataTypes';
import { NextResponse, NextRequest } from 'next/server';


// GETTING TYPESCRIPT ERROR... 
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


export interface PostBody { 
  sessionCookie_or_email: string; 
  quizidused: number[] | string; 
  correctanswers: number[];
  incorrectanswers: number[];
  tags: string[];
  score: number;
  starttimer: number;
  finishedat: number;
} 

export async function POST(request: Request) {
  const body = await request.json();
  const {
    sessionCookie_or_email,
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
      where: { email: sessionCookie_or_email },
      include: { completedquiz: true },
    });

    if (existingUser) {
      // Add a new completed quiz record
      const newCompletedQuiz = await prisma.completedquiz.create({
        data: {
          quizidused,
          correctanswers,
          incorrectanswers,
          tags,
          score,
          starttimer,
          finishedat,
          // Link this completed quiz to the existing user
          user: {
            connect: { id: existingUser.id }
          }
        },
      });
      return new Response(JSON.stringify({ message: 'Completed quiz record updated' }), { status: 200 });
    } else {
      let fakeExistingUser = await prisma.fakeuser.findUnique({
        where: { cookieid: sessionCookie_or_email },
        include: { completedquiz: true },
      });

      if (fakeExistingUser) {
        // Update existing fake user with new completed quiz record
        const updatedFakeUser = await prisma.fakeuser.update({
          where: { id: fakeExistingUser.id },
          data: {
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
        return new Response(JSON.stringify({ message: 'Existing fake user updated with new completed quiz record' }), { status: 200 });
      } else {
        // Create a new user under fakeuser and the completed quiz record
        const newUser = await prisma.fakeuser.create({
          data: {
            cookieid: sessionCookie_or_email,
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
    }
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'An error occurred' }), {
      status: 500,
    });
  }
}

