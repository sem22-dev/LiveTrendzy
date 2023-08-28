import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with your project's URL and API key
const supabase = createClient("https://brqjwwqiooahlpepuksr.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJycWp3d3Fpb29haGxwZXB1a3NyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyNjQxODMsImV4cCI6MjAwNzg0MDE4M30.drufTRk4tVH6NhOIqfrJC83WStHTGux6SzjARlI9m0E");

export const submitToSupabase = async (email, password) => {
  try {
    const { data, error } = await supabase
      .from('users') // Replace with your table name
      .insert([
        { email, password_hash: password } // Replace with your table's column names
      ]);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    throw error;
  }
};
