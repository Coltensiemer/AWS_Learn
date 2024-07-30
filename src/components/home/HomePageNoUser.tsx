import { Card, CardContent, CardHeader, CardFooter } from '../atomic/card/card';
import { Button } from '../atomic/button/button';
import Link from 'next/link';

export default function HomePageNoUser() {
  return (
    <Card className='w-1/4'>
      <CardHeader>
        <h1 className='text-2xl'>Take a Quiz without signing in!</h1>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter>
        <Button>
          <Link href='/options'>Click a button to start a Quiz</Link>
        </Button>
      </CardFooter>
    </Card>
 );
}
