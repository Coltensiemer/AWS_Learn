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
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.



export const columns: ColumnDef<QuizProps>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "question",
    header: "Question",
  },
  {
    accessorKey: "answer",
    header: "Answer",
  },
]
