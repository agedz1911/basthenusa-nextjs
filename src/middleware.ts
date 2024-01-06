import authConfig from "@/auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    //* "tanda (!!) = boolean
  const isLoggedIn = !!req.auth;
  console.log("route:", req.nextUrl.pathname);
  console.log("is Logedin:", isLoggedIn);
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
