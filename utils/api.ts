import type { ILoginRequest, ILoginResponse } from '@/types';

export async function login(credentials: ILoginRequest): Promise<ILoginResponse> {
  const response = await fetch('/api/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  const data = await response.json();
  return data;
} 