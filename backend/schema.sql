
-- ==========================================
-- MIGRATION 02: AUTHENTICATION & USER MANAGEMENT
-- ==========================================

CREATE TABLE users (
	    id VARCHAR(64) PRIMARY KEY,
	        username VARCHAR(255) UNIQUE NOT NULL,
	            email VARCHAR(255) UNIQUE NOT NULL,
	                password_hash TEXT NOT NULL,
	                    role VARCHAR(32) NOT NULL DEFAULT 'user',
	                        secret_key_hash TEXT,
	                            secret_key_verified BOOLEAN DEFAULT false,
	                                active BOOLEAN DEFAULT true,
	                                    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	                                        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
	                                        );

	                                        CREATE INDEX idx_users_email ON users(email);
	                             
)
