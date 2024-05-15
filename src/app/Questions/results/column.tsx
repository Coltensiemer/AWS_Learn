'use client';

import { ColumnDef, RowExpanding } from '@tanstack/react-table';
import { QuizProps } from '@prisma/dataTypes';
import { MoreHorizontal, ArrowUpDown, Table } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../../components/shadcn/dropdownmenu/dropdownmenu';
import { Button } from '../../../components/shadcn/button/button';
import { get } from 'http';
import { TableRow } from '../../../components/shadcn/table';
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

interface OptionType {
  id: number;
  value: string;
  iscorrect: boolean;
  quizId: number;
}

// Define the data type for the questions
export interface TableQuestionType {
  id: number;
  tag: string;
  sub_tag: string;
  question: string;
  correct_answer: string[];
  // options: OptionType[];
}

export const columns: ColumnDef<TableQuestionType>[] = [
  {
    header: 'Test Results',
    columns: [
      {
        accessorKey: 'id',
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
        cell: ({ row }) => {
          return <div>{row.index + 1}</div>;
        },
      },
      {
        accessorKey: 'question',
        header: 'Question',
      },
      {
        accessorKey: 'answer',
        header: 'Answer',
      },
      {
        accessorKey: 'correct_answer',
        header: ({ column }) => {
          return (
            <Button
              variant='ghost'
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === 'asc')
              }
            >
              Correct Answer
              <ArrowUpDown className='h-4 w-4' />
            </Button>
          );
        },
        enableHiding: false,
      },

      {
        id: 'actions',
        header: ({ table }) => {
          return (
            <>
            <p>header</p>
            </>
          );
        },

        cell: ({ row, getValue }) => (
          <div
            className="expander"
            style={{
              paddingLeft: `${row.depth * 2}rem`
            }}
          >
            {row.getCanExpand() && (
              <button
                className="toggle-expanded"
                {...{
                  onClick: row.getToggleExpandedHandler()
                }}
              >
                {row.getIsExpanded() ? (
                  <>
                  <p>Close</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="16"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#777"
                    >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                  </svg>
                      </>
                ) : (
                  <>
                  <p>
                    Expand
                    </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="16"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#777"
                    >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                  </svg>
                </>
                )}
              </button>
            )}            
          </div>
        )
      },
    ],
  },


];
