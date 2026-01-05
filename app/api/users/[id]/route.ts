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

// Update User by ID

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const updateData = await request.json();
  const userIndex = data.findIndex((user) => user.id === parseInt(id));

  if (userIndex === -1) {
    return new Response("User not found", { status: 404 });
  } else {
    const updateUser = { ...data[userIndex], ...updateData };
    data[userIndex] = updateUser;
    return Response.json(updateUser);
  }
}

// Delete User by ID

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const userIndex = data.findIndex((user) => user.id === parseInt(id));

  if (userIndex === -1) {
    return new Response("User not found", { status: 404 });
  } else {
    const deleteUser = data[userIndex];
    data.splice(userIndex, 1);
    return Response.json({ message: "User has been deleted", deleteUser });
  }
}
