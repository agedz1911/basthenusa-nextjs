import { auth } from "@/auth";
import { db } from "@/lib/db";
import { Edit, Eye, Trash } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";

const getData = async (id: string) => {
  const data = db.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      image: true,
    },
  });
  return data;
};

const AllUsers = async () => {
  const session = await auth();
  const data = await getData(session?.user.id as string);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-primary font-bold">
            Profile Picture
          </TableHead>
          <TableHead className="text-primary font-bold">Name</TableHead>
          <TableHead className="text-primary font-bold">Email</TableHead>
          <TableHead className="text-primary font-bold">Role</TableHead>
          <TableHead className="text-primary font-bold">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              {user.image === null ? (
                <Avatar>
                  <AvatarImage
                    src={`https://ui-avatars.com/api/?name=${user.name}`}
                  />
                </Avatar>
              ) : (
                <Avatar>
                  <AvatarImage src={user.image} />
                </Avatar>
              )}
            </TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Eye className="size-4" />
                <Edit className="size-3" />
                <Trash className="size-3" />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllUsers;
