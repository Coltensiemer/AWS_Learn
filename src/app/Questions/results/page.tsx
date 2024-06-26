import { NextResponse } from 'next/server';
import Results from '../../../useClient/Results';
import { getSession } from '../../../../actions/cookieActions/cookieActions';
import prisma from '../../../lib/prisma';
import { date } from 'zod';
// import QuizResultsTable from '../../../components/useServer/QuizResultsTable';
import { DataTable } from '../../../components/useClient/QuizResultsTable';
import { getTableResultData } from '../../../../actions/resultsActions';
import {getFakeUserResults, getFakeUserTableResultData} from '../../../../actions/resultsFakeUserAction';
import {columns} from './column';



export default async function Page() {
  const sessionID = await getSession();
  const userResults = await getFakeUserResults(sessionID);
  const sessiondata= await getFakeUserTableResultData(sessionID); 
  
  console.log(sessiondata);
  
  if (!sessiondata) { return <div>No data Avaliable: Refresh or return to Home</div> } 

  return (
    <div className='w-1/2'>
      <Results sessionData={userResults} />
      <DataTable columns={columns} data={sessiondata} />
    </div>
  );
}
