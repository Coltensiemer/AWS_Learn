"use client"


import { ColumnDef } from "@tanstack/react-table"
import { QuizProps } from "@prisma/dataTypes"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger } from "../../../components/shadcn/dropdownmenu/dropdownmenu";
  import { Button } from "../../../components/shadcn/button/button";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.



export const columns: ColumnDef<QuizProps>[] = [
  {
    accessorKey: "id", 
    header: ({ column }) => {
      return (
        <Button variant="ghost"
        onClick={() => column.toggleSorting(column.getSortIndex() === 0)}>
          ID
          <ArrowUpDown className="h-4 w-4" />
        </Button>
        
      )
    }, 
    
    enableHiding: false,
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
    header: ({ column }) => {
      return (
        <Button variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Correct Answer
          <ArrowUpDown className="h-4 w-4" />
        </Button>
        
      )
    },
    enableHiding: false,  
  },

  // {
  //   //@ts-ignore
  //   accessorFn: (row) => row.options.map((option) => option.value).join(", "),
  //   header: "Options",
  // },

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
