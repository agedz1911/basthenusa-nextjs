import { db } from "./db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: { email },
    });
    return user;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
    });
    return user;
  } catch (error) {
    return null;
  }
};

export const getUserRole = async (role: string) => {
  try {
    const userRole = await db.user.findFirstOrThrow({
      where: { role: (role = "ADMIN") },
    });
    return userRole;
  } catch (error) {
    return null;
  }
};
