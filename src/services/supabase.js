import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ceosmtgzcrjunhumwzgg.supabase.co";

const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlb3NtdGd6Y3JqdW5odW13emdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxMzE2NzcsImV4cCI6MjAyMjcwNzY3N30.8JYeDtNBHog-o6ok9UMgWCbT5hQ-BgQ1r6elxKvbgks";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
