
import Results from '../../../components/results/Results';
import { getSession } from '../../../../actions/cookieActions/cookieActions';
import { DataTable } from '../../../components/results/QuizResultsTable';
import {getFakeUserResults, getFakeUserTableResultData} from '../../../../actions/resultsFakeUserAction';
import {columns} from './column';



export default async function Page() {
  const sessionID = await getSession();
  const userResults = await getFakeUserResults(sessionID);
  const sessiondata= await getFakeUserTableResultData(sessionID);   
  if (!sessiondata) { return <p>No data Avaliable: Refresh or return to Home</p> } 

  return (
    <div className='w-1/2'>
      <Results sessionData={userResults} />
      <DataTable columns={columns} data={sessiondata} />
    </div>
  );
}
