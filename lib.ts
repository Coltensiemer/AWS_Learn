'use server'

import { cookies } from "next/headers";
import { generateCookieID } from "./src/functions/generateSessionID/generateCookieID";

export async function getSession() {
  const OneTimeSessionID = cookies().get("OneTimeSessionID")?.value;
  if (!OneTimeSessionID) return null;
  return await (OneTimeSessionID);
}

export async function createCookie() {
  const OneTimeSessionID = generateCookieID(); 
  const oneDay = 24 * 60 * 60 * 1000
  cookies().set('OneTimeSessionID', OneTimeSessionID, {expires: Date.now() + oneDay})
}


