import { PrismaClient } from "@prisma/client";

<<<<<<< HEAD
declare global{
    var prisma: PrismaClient |  undefined;
=======
declare global {
  var prisma: PrismaClient | undefined;
>>>>>>> d0974a5cc8e9aebf0812ee9bd49b54b5aaff0e36
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
<<<<<<< HEAD
=======

export default db;
>>>>>>> d0974a5cc8e9aebf0812ee9bd49b54b5aaff0e36
