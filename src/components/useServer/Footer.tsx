import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='relative bottom-0 w-full p-2'>
      <div className='container mx-auto flex flex-col'>
        <p className='text-left text-xs'>
          Created by{' '}
          <Link href='https://github.com/Coltensiemer' className='underline'>
            Colten Siemer
          </Link>
        </p>
        <p className='text-xs'>
          Open Source: Code is available on{' '}
          <Link href='https://github.com/Coltensiemer/AWS_Learn' className='underline'>Github</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
