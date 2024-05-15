import { NextResponse } from 'next/server';
import Results from '../../../useClient/Results';
import { getSession } from '../../../../lib';
import prisma from '../../../lib/prisma';
import { date } from 'zod';
// import QuizResultsTable from '../../../components/useServer/QuizResultsTable';
import { DataTable } from '../../../components/useClient/QuizResultsTable';
import { columns } from './column';

async function getUserResults(sessionID: string) {
  const sessiondata = await prisma.fakeuser.findFirst({
    ///change so it only recieves the last quiz
    where: {
      cookieid: sessionID,
    },
    include: { completedquiz: true },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return sessiondata;
}

async function getQuizList(quizidused: number[] | undefined) {
  // Fetch the Questions used in the quiz
  try {
    if (quizidused === undefined) {
      return null;
    }
    const data = await prisma.quiz.findMany({
      where: {
        id: { in: quizidused },
      },
      include: { options: true },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Page() {
  const sessionID = await getSession();

  const sessiondata = await getUserResults(sessionID);
  const questionList = await getQuizList(
    sessiondata?.completedquiz[0].quizidused
  );

  if (!sessiondata || !questionList) { return <div>No data Avaliable: Refresh or return to Home</div> } 

  return (
    <div className='w-1/2'>
      <Results sessionData={sessiondata} />
      <DataTable columns={columns} data={questionList} />
    </div>
  );
}
