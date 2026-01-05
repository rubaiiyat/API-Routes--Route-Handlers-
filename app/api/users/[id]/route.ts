import { data } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  const user = data.find((user) => user.id === parseInt(id));
  if (user) {
    return Response.json(user);
  } else {
    return new Response("User not found", { status: 404 });
  }
}
