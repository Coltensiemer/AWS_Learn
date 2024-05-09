import { Card, CardContent, CardHeader, CardFooter } from '../shadcn/card/card';
import { Button } from '../shadcn/button/button';
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
      <CardFooter>
				<div className='flex flex-col justify-evenly'>
        <Button>
          <Link href='/Questions'>Login</Link>
        </Button>
        <Button>
          <Link href='/Questions'>SignUp</Link>
        </Button>
				</div>
      </CardFooter>
   </Card>

  );
}
