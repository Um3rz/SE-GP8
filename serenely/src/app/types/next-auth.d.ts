import { Role } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: Role;
    } & DefaultSession["user"]
  }

  interface User {
    id: string;
    role?: Role;
  }

  interface JWT {
    id: string;
    role: Role;
  }
}