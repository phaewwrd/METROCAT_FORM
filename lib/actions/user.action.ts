'use server';

import { signIn, signOut } from '@/lib/auth';
import { signUpExcludeConfirmSchema } from '@/schemas/auth.schema';
import { ActionResult } from '@/types/action-result.type';
import bcrypt from 'bcryptjs';
import { CredentialsSignin } from 'next-auth';
import prisma from '../db/prisma';

export async function signUpCredentials(rawData: unknown): Promise<ActionResult> {
  try {
    const { success, data, error } = signUpExcludeConfirmSchema.safeParse(rawData);

    if (!success) {
      return { success: false, message: 'validationError', error: error.flatten().fieldErrors };
    }

    const existUser = await prisma.user.findUnique({ where: { username: data.username } });
    if (existUser) {
      return { success: false,  message: 'validationError', error: { email: 'Email already in use' } };
    }

    data.password = await bcrypt.hash(data.password, 10);
    await prisma.user.create({ data });
    return { success: true, message: 'Account has been created' };
  } catch (error) {
    console.log(error);
    return { success: false, message: 'Something went wrong' };
  }
}

export async function signInCredentials(data: Record<string, any>) {
  try {
    await signIn('credentials', { data, redirect: false});
    return { success: true, message: 'Successfully signed in' };
  } catch (error) {
    if (error instanceof CredentialsSignin) {
      return { success: false, isCredentialsError: true, message: 'Invalid credentials' };
    }
    return { success: false, message: 'Something went wrong' };
  }
}

export async function signOutUser() {
  await signOut({ redirectTo: '/signin' });
}
