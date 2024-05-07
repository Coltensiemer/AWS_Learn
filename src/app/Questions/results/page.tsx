import { NextResponse } from 'next/server';
import Results from '../../../useClient/Results';
import { getSession } from '../../../../lib';
import prisma from '../../../lib/prisma';
import { date } from 'zod';
import QuizResultsTable from '../../../components/useServer/QuizResultsTable';

export default async function Page() {
  const sessionID = await getSession();
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

  return (
    <>
      <div>
        <Results sessionData={sessiondata} />
        <QuizResultsTable sessionID={sessionID} sessionData={sessiondata} />
      </div>
    </>
  );
}
