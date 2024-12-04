"use server"

import { cookies } from "next/headers";

export async function setNewToken(newToken: string) {
  const cookieStore = await cookies();
  cookieStore.set('accessToken', newToken);
}