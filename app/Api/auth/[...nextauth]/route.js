import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials){
          const user = {id: "1"}
          return user
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_SECRET_AUTH,
  pages:{
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };