'use client';

import { ColumnDef } from '@tanstack/react-table';
import {
  TableQuestionType,
  UserTableQuestionType,
} from '../../../../actions/resultsFakeUserAction';
import { Button } from '../../../components/atomic/button/button';
import { ArrowUpDown, Check, CircleX } from 'lucide-react';
import Image from 'next/image';
import { info, table } from 'console';

export const columns: ColumnDef<TableQuestionType>[] = [
  {
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getSortIndex() === 0)}
        >
          ID
          <ArrowUpDown className='h-4 w-4' />
        </Button>
      );
    },
    enableHiding: false,
    accessorFn: (row, rowIndex) => rowIndex + 1, // rowIndex starts from 0, so add 1 to start from 1
    id: 'index',
    cell: (info) => info.row.index + 1, // This is for the cell value
  },
  {
    header: 'Question',
    accessorKey: 'question',
    cell: ({ row }) => {
      return <p>{row.original.question}</p>;
    },
  },

  {
    header: 'Correct Answer',
    accessorKey: 'correct_answer',
  },
  {
    header: 'Selected Answer',
    accessorKey: 'userSelected',
  },
  {
    header: "User's Answer",
    accessorKey: 'userCorrect',
  }, 
  {
    header: 'Tag',
    accessorKey: 'tag',
  },
  {
    id: 'actions',
    header: 'Actions',

    cell: ({ row, getValue }) => (
      <div
        style={{
          paddingLeft: `${row.depth * 1}rem`,
        }}
      >
        {row.getCanExpand() && (
          <button
            className='toggle-expanded'
            {...{
              onClick: row.getToggleExpandedHandler(),
            }}
          >
            {row.getIsExpanded() ? (
              <>
                <p>Close</p>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  width='16'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='#777'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </>
            ) : (
              <>
                <p>Expand</p>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  width='16'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='#777'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8.25 4.5l7.5 7.5-7.5 7.5'
                  />
                </svg>
              </>
            )}
          </button>
        )}{' '}
      </div>
    ),
  },
];
