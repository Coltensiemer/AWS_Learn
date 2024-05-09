import Link from 'next/link';

export default function Header(){
  return (
    <header className='container flex mb-10 px-10 w-1/2'>
			<h1>AWS Quiz</h1>
      <nav className='flex items-center justify-between'>
        <ul className='flex px-2'>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/">
          About 
            </Link>
          </li>
          <li>
            <Link href="/">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};


