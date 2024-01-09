import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://iekdghddmldcabtztgai.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlla2RnaGRkbWxkY2FidHp0Z2FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMwODYxNTAsImV4cCI6MjAxODY2MjE1MH0.DpxqrO1gLEusd70sJB63tipk8hg4UOSnY0uD7fyhyBQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
