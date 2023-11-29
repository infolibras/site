import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      nome: string;
      email: string;
      cargo: "Aluno" | "Professor" | "Administrador";
      [key: string]: string;
    }
  }
}
