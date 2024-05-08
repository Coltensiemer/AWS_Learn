"use client"
// import { ColumnDef,flexRender,
//   getCoreRowModel,
//   useReactTable, } from "@tanstack/react-table" 


// 	interface QuestionOption {
//     id: number;
//     value: string;
//     iscorrect: boolean;
//     quizId: number;
// }

// interface Question {
//     id: number;
//     tag: string;
//     sub_tag: string;
//     question: string;
//     correct_answer: string;
//     options: QuestionOption[];
// }

// export type QuestionListType = (Question)[];

// // relook at type and fix 'any
// export const ColumnHeaders: ColumnDef<QuestionListType | any>[] = [ 
//     { header: "Question", accessorKey: "question" },
//     { header: "Subject", accessorKey: "tag" }, // Assuming "subject" is meant to be "tag"

//     { header: "Answer",
// 		 accessorKey: "correct answer",
// 		 cell: ({ row }) => (
//       <div className="capitalize">{row.getValue("Answer")}</div>
//     ),
// 	}
// ];


import { ColumnDef } from "@tanstack/react-table"
import { QuizProps } from "@prisma/dataTypes"
import { MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger } from "../../../components/shadcn/dropdownmenu/dropdownmenu";
  import { Button } from "../../../components/shadcn/button/button";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.



export const columns: ColumnDef<QuizProps>[] = [
  {
    // accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      return <div>{row.index + 1}</div>
    }
  },
  {
    accessorKey: "question",
    header: "Question",
  },
  {
    accessorKey: "answer",
    header: "Answer",
  },
  {
    accessorKey: "correct_answer",
    header: "Correct Answer",
  },

  {
    //@ts-ignore
    accessorFn: (row) => row.options.map((option) => option.value).join(", "),
    header: "Options",
  },

  {
    id: 'actions',
    cell: ({ row }) => {

     return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
          >
            Expand Question Details
          </DropdownMenuItem>
          </DropdownMenuContent>
      </DropdownMenu>
    )
  }
} 
]
