import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://arylaxermtarltgzbbov.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyeWxheGVybXRhcmx0Z3piYm92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4NzM1MzksImV4cCI6MjA1MjQ0OTUzOX0.5kJh6FC8kEws0SfzF7mEUoUY0xX-KbgYjA52c8KDvJM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
