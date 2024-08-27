// app/auth/signin/page.js
"use client"; // Mark this component as a Client Component

import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function SignIn() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const username = event.target.username.value;
    const password = event.target.password.value;

    try {
      await signIn('credentials', {
        redirect: true,
        username,
        password,
      });
    } catch (error) {
      console.error('Error signing in:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <input name="username" type="text" placeholder="Username" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}
