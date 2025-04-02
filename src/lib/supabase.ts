import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://icjlgunkwkyvgfnhdimm.supabase.co"
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljamxndW5rd2t5dmdmbmhkaW1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzMDc1NzYsImV4cCI6MjA1Njg4MzU3Nn0.h5byYRXjWsxI48FDdqMPGx5IqRey9N0Eb9rJkr-bGMs'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase;