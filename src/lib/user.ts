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
      include: { biodata: true },
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

export const getBiodataById = async (id: string) => {
  try {
    const bio = await db.biodata.findUnique({
      where: { id },
    });
    return bio;
  } catch (error) {
    return null;
  }
};
