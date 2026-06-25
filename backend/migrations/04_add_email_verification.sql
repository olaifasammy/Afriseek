
-- Migration to add email verification fields to users table

ALTER TABLE users 
ADD COLUMN is_email_verified BOOLEAN DEFAULT false,
ADD COLUMN email_verification_token VARCHAR(255),
ADD COLUMN email_verification_sent_at TIMESTAMP WITH TIME ZONE;
