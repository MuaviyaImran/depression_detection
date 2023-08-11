import { withAuth } from 'next-auth/middleware';

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      // `/admin` requires admin role
      if (req.nextUrl.pathname === '/blog') {
        return token?.userRole === 'admin';
      }
      // `/me` only requires the user to be logged in
      return !!token;
    },
  },
});

export const config = { matcher: ['/blog', '/about'] };
