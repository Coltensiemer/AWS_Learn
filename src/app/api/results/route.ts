import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';
import { getSession } from '../../../../lib';

export async function GET(request: Request) {
  try {
    let sessionID = request.headers.get('sessionid');

    if (!sessionID) {
      throw new Error('No session ID found');
    }

    const sessiondata = await prisma.user.findFirst({
      where: {
        email: sessionID,
      },
      include: { completedquiz: true },
      orderBy: { 
        createdAt: 'desc'
      },
    });

    const cookiesessiondata = await prisma.fakeuser.findFirst({
      where: {
        cookieid: sessionID,
      },
      include: { completedquiz: true },
      orderBy: {
        createdAt: 'desc'
      },
    });

    const data = cookiesessiondata?.completedquiz[0] || sessiondata?.completedquiz[0]

    return NextResponse.json({ data });
  } catch (error) {
    console.error(error);
  } finally {
    prisma.$disconnect();
  }
}
