import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { prisma } from "@/lib/prisma";

import authConfig from "@/auth.config";
import { getUserById, setUsername } from "@/actions/user";

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/signIn",
    error: "/auth-error",
  },
  events: {
    // async linkAccount({ user }) {
    //   await prisma.user.update({
    //     where: { id: user.id },
    //     data: { emailVerified: new Date() },
    //   });
    // },
  },
  callbacks: {
    async signIn({ user, account }) {
      // Allow Oauth without email verification
      if (account?.provider !== "credentials") {
        return true;
      }

      const existingUser = await getUserById(user.id as string);
      return !!existingUser;
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl;
    // },

    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user, trigger }) {
      if (trigger === "signUp") {
        // @ts-expect-error this is okay
        if (!user.username) {
          const random2DigitNumber = Math.floor(Math.random() * 90) + 10;
          const defaultUsername = `${user.name}${random2DigitNumber}`;
          await setUsername(user.id as string, defaultUsername);
          // 08227856490
        }
      }
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
