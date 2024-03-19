'use client';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../components/ui/pagination';
import { useParams, usePathname } from 'next/navigation';

export function PaginationDirection() {
  const PathName = usePathname();
  //Find the index of the last occurrence of '/' character in the pathname.
  const lastSlashIndex = PathName.lastIndexOf('/');
  const CurrentPathName = PathName.substring(0, lastSlashIndex);

  //Get the slug from the URL
  const params = useParams<{ slug: string }>();

  //Calculate the previous and next slug numbers
  const previousSlug = parseInt(params.slug) - 1;
  const previousSlugString = previousSlug.toString();

  //Calculate the next slug number
  const nextSlug = parseInt(params.slug) + 1;
  const nextSlugString = nextSlug.toString();

  return (
    <Pagination>
      <PaginationContent>
        {previousSlug >= 1 && (
          <>
            <PaginationItem>
              <PaginationPrevious
                href={`${CurrentPathName}/${previousSlugString}`}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={`${CurrentPathName}/${previousSlugString}`}>
                {previousSlugString}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationLink className='bg-blue-100' href='#' isActive>
            {params.slug}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={`${CurrentPathName}/${nextSlugString}`}>
            {nextSlugString}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={`${CurrentPathName}/${nextSlugString}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
