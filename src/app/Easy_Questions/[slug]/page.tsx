'use client';
import { EasyQA } from '../../../Data';
import { useParams } from 'next/navigation';
import { Quiz } from '../../../useClient/Quiz';

/// This could be a static rendering GETSTATICPROPS once data is in a server.
/// Data will be cached at build time and cach to a CDN
export default function Page({ params }: { params: { slug: string } }) {
  const { index } = useParams();

  const questionIndex = parseInt(params.slug + 1);

  return (
    <div className='flex flex-col'>
      <Quiz questions={EasyQA} questionIndex={questionIndex} />
    </div>
  );
}
