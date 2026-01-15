
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://exyezfrhrfjortpnqgat.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4eWV6ZnJocmZqb3J0cG5xZ2F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzMzM0NTAsImV4cCI6MjA4MzkwOTQ1MH0.UdbHDMN6P8c4NfIOBJC0Xoe6JvCwxl0_HU9A0FGP7kg"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase