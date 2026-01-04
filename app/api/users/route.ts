import { data } from "./data";

export async function GET() {
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
