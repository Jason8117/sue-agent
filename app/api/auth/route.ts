import { NextResponse } from 'next/server';
import type { ILoginRequest } from '@/types';

const API_BASE_URL = 'http://4.144.198.168/api';

export async function POST(request: Request) {
  const credentials: ILoginRequest = await request.json();

  try {
    console.log('[Login API Request]', {
      url: `${API_BASE_URL}/auth/ims-persons/login`,
      method: 'POST',
      body: credentials
    });

    const response = await fetch(`${API_BASE_URL}/auth/ims-persons/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Login request failed');
    }

    const data = await response.json();
    console.log('[Login API Response]', data);
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('[Login API Error]', error);
    return NextResponse.json(
      { error: 'Failed to login' }, 
      { status: 500 }
    );
  }
} 