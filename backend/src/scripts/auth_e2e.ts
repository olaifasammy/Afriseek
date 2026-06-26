import axios from 'axios';
import { initializeDependencies, getDependencies } from '../config/dependencies';

const API_BASE = 'http://localhost:3000/api';

async function runAuthE2E() {
  console.log("🚀 Starting E2E Auth Flow Test...");

  // 1. Initialize dependencies to access DB
  initializeDependencies();
  const { userRepository } = getDependencies();

  const user = {
    username: 'e2etestuser' + Date.now(),
    email: 'e2e' + Date.now() + '@example.com',
    password: 'Password123!',
  };

  try {
    // 2. Register
    console.log("➡️ Registering user...");
    await axios.post(`${API_BASE}/auth/register`, user);
    console.log("✅ Registration successful.");

    // 3. Get verification token from DB
    console.log("➡️ Retrieving verification token from DB...");
    const dbUser = await userRepository.findByEmail(user.email);
    if (!dbUser || !dbUser.emailVerificationToken) {
        throw new Error("User not found or token missing in DB");
    }
    const token = dbUser.emailVerificationToken;
    console.log(`✅ Token retrieved: ${token}`);

    // 4. Login (should fail before verification)
    console.log("➡️ Testing login before verification (should fail)...");
    try {
        await axios.post(`${API_BASE}/auth/login`, { email: user.email, password: user.password });
        throw new Error("Login succeeded unexpectedly!");
    } catch (err: any) {
        if (err.response?.status === 403) {
            console.log("✅ Login blocked as expected (403).");
        } else {
            throw err;
        }
    }

    // 5. Verify email via API
    console.log("➡️ Verifying email via API...");
    await axios.get(`${API_BASE}/auth/verify-email?token=${token}`);
    console.log("✅ Email verified.");

    // 6. Login (should succeed)
    console.log("➡️ Testing login after verification...");
    const loginRes = await axios.post(`${API_BASE}/auth/login`, { email: user.email, password: user.password });
    if (loginRes.data.success) {
        console.log("✅ Login successful!");
    } else {
        throw new Error("Login failed!");
    }

    console.log("🎉 E2E Auth Flow Test Passed!");
  } catch (error: any) {
    console.error("❌ E2E Auth Flow Test Failed:", error.message || error);
    process.exit(1);
  }
}

runAuthE2E();
