import { auth } from "@/auth";
import { db } from "@/lib/db";
import { Edit, Trash } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarImage } from "../../ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import DeleteUser from "./DeleteUser";

const getData = async (id: string) => {
  const data = db.user.findMany({
    orderBy: {
      id: "asc",
    },
    include: {
      biodata: true,
    },
    // select: {
    //   id: true,
    //   name: true,
    //   email: true,
    //   role: true,
    //   image: true,
    //   biodata: {
    //     select: {
    //       country: true,
    //       birthDay: true,
    //       phoneNumber: true,
    //     },
    //   },
    // },
  });
  return data;
};

const AllUsers = async () => {
  const session = await auth();
  const data = await getData(session?.user.id as string);
  //console.log(data);

  return (
    <>
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
          {data.map((user: any) => (
            <TableRow key={user.id} className="text-muted-foreground">
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
              {/* <TableCell>
                {user.biodata.map((biodata: any) => (
                  <p key={biodata.id}>{biodata.country}</p>
                ))}
              </TableCell> */}
              <TableCell>{user.role}</TableCell>
              <TableCell className="lg:w-[100px] ">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <Link href={`/dashboard/admin/users/${user.id}`}>
                      <Edit className="size-4" />
                    </Link>
                  </div>
                  <DeleteUser
                    name={user.name}
                    email={user.email}
                    imgUrl={user.image}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AllUsers;
