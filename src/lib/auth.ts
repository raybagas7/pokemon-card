import NextAuth from 'next-auth';
import google from 'next-auth/providers/google';

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [google],
});
