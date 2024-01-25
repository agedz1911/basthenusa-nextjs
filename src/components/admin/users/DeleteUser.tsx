import DeleteButton from "@/components/DeleteButton";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { db } from "@/lib/db";
import { Trash } from "lucide-react";
import { redirect } from "next/navigation";

interface btnDelete {
  imgUrl?: string;
  name?: string;
  email?: string;
}

const DeleteUser = ({ email, imgUrl, name }: btnDelete) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Trash className="size-4 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="font-semibold text-xl">Are You Sure to Delete?</h1>
            {imgUrl !== null ? (
              <Avatar className="w-20 h-20">
                {" "}
                <AvatarImage src={imgUrl} />
              </Avatar>
            ) : (
              <Avatar className="w-20 h-20">
                {" "}
                <AvatarImage src={`https://ui-avatars.com/api/?name=${name}`} />
              </Avatar>
            )}
            <div className="gap-0">
              <h1 className="text-xl">{name}</h1>
              <p className="text-xs text-muted-foreground">{email}</p>
            </div>
          </div>
        </DialogHeader>
        <div className="flex justify-evenly p-3">
          <DialogClose asChild>
            <Button type="button" className="w-1/3" variant="default">
              Cancel
            </Button>
          </DialogClose>
          <form
            action={async () => {
              "use server";
              await db.user.delete({
                where: {
                  email: email,
                },
              });
              redirect("/dashboard/admin/users");
            }}
            className="w-1/3"
          >
            <DeleteButton />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteUser;
