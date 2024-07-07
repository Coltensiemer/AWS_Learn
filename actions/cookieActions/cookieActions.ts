'use server'

import { cookies } from "next/headers";
import { generateCookieID } from "../../src/functions/generateSessionID/generateCookieID";
import prisma from "../../lib/prisma";

export async function getSession() {
  // Retrieve the OneTimeSessionID cookie value
  const OneTimeSessionID = await cookies().get("OneTimeSessionID")?.value;
  if (!OneTimeSessionID) {
    throw new Error("No session ID found");
  }
  return OneTimeSessionID;
}


export async function createCookie() {
  /// Generate a new OneTimeSessionID and Set the cookie
  const OneTimeSessionID = generateCookieID(); 
  const oneDay = 24 * 60 * 60 * 1000
  cookies().set('OneTimeSessionID', OneTimeSessionID, {expires: Date.now() + oneDay})
}


export async function UserTestResults(sessionID: string) {
  
  const sessiondata = await prisma.fakeuser.findFirst({
    ///change so it only recieves the last quiz
    where: {
      cookieid: sessionID,
    },
    include: { completedquiz: true },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return sessiondata;
}