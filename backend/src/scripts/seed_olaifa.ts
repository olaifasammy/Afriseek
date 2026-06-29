import { PostgreSQLUserRepository } from "../infrastructure/repositories/postgres/PostgreSQLUserRepository";
import { UserRole } from "../types/role";
import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';

async function seedUser() {
    const userRepository = new PostgreSQLUserRepository();
    
    const email = 'olaifasammy@gmail.com';
    const existingUser = await userRepository.findByEmail(email);
    
    if (existingUser) {
        console.log('User already exists.');
        return;
    }
    
    const passwordHash = await bcrypt.hash('admin123@', 10);
    
    await userRepository.create({
        id: crypto.randomUUID(),
        username: 'olaifa',
        email: email,
        passwordHash: passwordHash,
        role: UserRole.HEAD_ADMIN,
        active: true,
        isEmailVerified: true,
        metadata: {
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
    } as any);
    
    console.log('User seeded successfully.');
}

seedUser().catch(console.error);
