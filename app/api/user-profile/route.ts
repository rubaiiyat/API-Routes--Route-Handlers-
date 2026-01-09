import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  const abc = cookieStore.set("abc", "123");
  const taken = cookieStore.get("abc");
  console.log(taken);
  return new Response("user-profile api route");
}
