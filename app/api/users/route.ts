import { NextRequest } from "next/server";
import { data } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const search = searchParams.get("search");

  if (search) {
    const filterData = data.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );
    return Response.json(filterData);
  }
  return Response.json(data);
}

export async function POST(request: Request) {
  const newData = await request.json();

  const newUser = {
    id: data.length + 1,
    ...newData,
  };
  data.push(newUser);
  return new Response(JSON.stringify(newUser), { status: 201 });
}
