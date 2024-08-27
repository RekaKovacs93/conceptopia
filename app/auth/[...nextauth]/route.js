import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // Hardcoded credentials for testing
        if (credentials.username === 'admin' && credentials.password === 'adminpassword') {
          return { id: 1, name: 'Admin' };
        }
        // Return null if authentication fails
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',  // Redirect to a custom error page if needed
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
