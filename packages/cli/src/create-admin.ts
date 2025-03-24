import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import * as readline from "readline";

const prisma = new PrismaClient();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
};

async function createAdmin() {
  try {
    const email = await question("Enter admin email: ");
    const password = await question("Enter admin password: ");
    const fullName = await question("Enter admin full name: ");

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user with admin role
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: "ADMIN",
        verified: true,
      },
    });

    // Create admin profile
    await prisma.adminProfile.create({
      data: {
        fullName,
        userId: user.id,
      },
    });

    console.log(`Admin user created successfully with ID: ${user.id}`);
  } catch (error) {
    console.error("Error creating admin:", error);
  } finally {
    rl.close();
    await prisma.$disconnect();
  }
}

createAdmin();
