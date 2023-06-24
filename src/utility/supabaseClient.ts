import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://sgznsejpemuwikxdltch.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnem5zZWpwZW11d2lreGRsdGNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY5NTY4NjIsImV4cCI6MjAwMjUzMjg2Mn0.-ka_a_7m58gAiHBErZKBxfWWo7Tz-M6HcbdaJilXcD8";
export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
