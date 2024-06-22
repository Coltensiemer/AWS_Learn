import { Card, CardContent, CardHeader, CardFooter } from '../atomic/card/card';
import { Button } from '../atomic/button/button';
import Link from 'next/link';

export default function HomePageSignIn() {
  return (
    <Card className='w-1/4'>
      <CardHeader>
        <h1 className='text-2xl'>Already got an Account?</h1>
      </CardHeader>
      <CardContent>
        <p>Sign in to save your progress and see your scores!</p>
      </CardContent>
      <CardFooter className='flex justify-center space-x-4'>
        <Button>
          <Link href='/Questions'>Login</Link>
        </Button>
        <Button>
          <Link href='/Questions'>SignUp</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
