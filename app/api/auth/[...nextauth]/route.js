import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handlers = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {
    try {
      await connectToDB();
    } catch (error) {
      console.log(error);
    }
  },
  async signIn({ profile }) {},
});

export { handlers as GET, handlers as POST };
console.log();
