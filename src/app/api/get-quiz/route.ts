import prisma from '../../../lib/prisma'
import { QuestionType } from '../../../../prisma/dataTypes';
import { NextResponse, NextRequest } from 'next/server';


export async function GET(request: Request, {params}: {params: {tags: string[]}}) {

    console.log('test', params.tags)
    if (!params || !params.tags) {
        const data: QuestionType[] = await prisma.quiz.findMany({
            include: {
              options: true,
            },
          });
          return NextResponse.json({questions: data});
    }            
      
        const data: QuestionType[] = await prisma.quiz.findMany({
            where: {
                OR: params.tags.map(tag => ({ tag })),
            },
            include: {
                options: true,
            },
        });
        
                prisma.$disconnect();

        return NextResponse.json({questions: data});
    }
    
    
    