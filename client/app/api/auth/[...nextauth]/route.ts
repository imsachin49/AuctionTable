import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account }: any) {
      try {
        if (user && account) {
          const res = await axios.post(
            "https://auctiontable.onrender.com/api/auth/oauth",
            {
              email: user.email,
              username: user.name,
              provider: account.provider,
              providerId: account.providerAccountId,
              avatar: user.image,
            }
          );
          if (res?.data?.data?.token) {
            user.token = res.data.data.token;
          }
          return true;
        } else {
          console.error("User or account is undefined");
          return false;
        }
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.token = user.token;
      }
      return token;
    },
    async session({ session, user, token }: any) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.token = token.token;
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };