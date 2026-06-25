-- Add account lockout tracking to users table
ALTER TABLE users ADD COLUMN failed_login_attempts INTEGER DEFAULT 0;
ALTER TABLE users ADD COLUMN last_failed_login_at TIMESTAMP WITH TIME ZONE;
