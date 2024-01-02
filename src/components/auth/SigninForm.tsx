import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

const SigninForm = () => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 font-semibold text-2xl">
          <div className="relative h-12 w-12">
            <Link href="/">
              <Image src="/logo.png" alt="logo" fill />
            </Link>
          </div>
          Sign in
        </CardTitle>
        <CardDescription>Login to your account</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Password" />
        </div>
        <Button className="w-full">Sign in</Button>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <div className="mx-auto flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
          OR
        </div>
        <Button className="w-full mt-2" variant={"outline"}>
          Google Sign in
        </Button>
        <p className="text-center text-muted-foreground text-sm mt-2">
          If you don&apos;t have an account, please&nbsp;
          <Link className="text-sky-600 hover:underline" href="/signup">
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SigninForm;
