import { PrismaClient } from '@prisma/client';
import { QuestionType } from '../../../../prisma/dataTypes';
import { NextResponse } from 'next/server';

export async function GET() {
const prisma = new PrismaClient();

	
  const data: QuestionType[] = await prisma.quiz.findMany({
	where: {
	  tag: 'AWS',
	},
	include: {
	  options: true,
	},
  });
  prisma.$disconnect();
  return NextResponse.json(data);
}