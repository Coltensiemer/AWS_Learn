import Link from 'next/link';
import { Button } from '../shadcn/button/button';

export default function Header(){
  return (
    <header className=' fixed container flex px-10 m-2'> 
			<h1 className='font-bold text-xl mr-auto'>AWS Quiz</h1>
      <nav className='flex items-center justify-between'>
        <ul className='flex space-x-4'>
          <li>
            <Button variant='link'>
            <Link href="/">
              Home
            </Link>
            </Button>
          </li>
          {/* <li>
            <Link href="/">
          About 
            </Link>
          </li>
          <li>
            <Link href="/">
              Contact
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};


