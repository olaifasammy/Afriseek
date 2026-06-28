import { PostgreSQLUserRepository } from "../infrastructure/repositories/postgres/PostgreSQLUserRepository";
import { UserRole } from "../types/role";
import * as bcrypt from 'bcryptjs';

async function createAdmin() {
    const userRepository = new PostgreSQLUserRepository();
    
    const adminEmail = 'admin@afriseek.com';
    const existingAdmin = await userRepository.findByEmail(adminEmail);
    
    if (existingAdmin) {
        console.log('Admin user already exists.');
        return;
    }
    
    const passwordHash = await bcrypt.hash('SecureAdminPassword123!', 10);
    
    await userRepository.create({
        id: crypto.randomUUID(),
        username: 'admin',
        email: adminEmail,
        passwordHash: passwordHash,
        role: 'admin' as UserRole,
        active: true,
        isEmailVerified: true,
        metadata: {
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
    });
    
    console.log('Admin user created successfully.');
}

createAdmin().catch(console.error);
