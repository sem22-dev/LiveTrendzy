import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { supabase } from "../../utils/supabase"; // Import your Supabase client

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        const { user, error } = await supabase.auth.signIn({
          email,
          password,
        });

        if (error) {
          throw new Error(error.message);
        }

        return user;
      },
    }),
  ],
  session: {
    jwt: true,
  },
  callbacks: {},
});