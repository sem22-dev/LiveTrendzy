import NextAuth from "next-auth";
import { SupabaseAdapter } from "@auth/supabase-adapter";
import jwt from "jsonwebtoken";

export default NextAuth({
  providers: [
    // Add your provider configurations here
    // Example:
    // {
    //   id: "google",
    //   name: "Google",
    //   type: "oauth",
    //   version: "2.0",
    //   scope: "profile email",
    //   params: { grant_type: "authorization_code" },
    //   accessTokenUrl: "https://accounts.google.com/o/oauth2/token",
    //   requestTokenUrl: "https://accounts.google.com/o/oauth2/auth",
    //   authorizationUrl:
    //     "https://accounts.google.com/o/oauth2/auth?response_type=code&prompt=consent",
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // },
  ],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY,
  }),
  callbacks: {
    async session({ session, user }) {
      const signingSecret = process.env.SUPABASE_JWT_SECRET;
      if (signingSecret) {
        const payload = {
          aud: "authenticated",
          exp: Math.floor(new Date(session.expires).getTime() / 1000),
          sub: user.id,
          email: user.email,
          role: "authenticated",
        };
        session.supabaseAccessToken = jwt.sign(payload, signingSecret);
      }
      return session;
    },
  },
});