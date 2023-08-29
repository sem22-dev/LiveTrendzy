// pages/api/auth/session.js
import { supabase } from "../../utils/supabase";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      const { user, error } = await supabase.auth.signIn({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}