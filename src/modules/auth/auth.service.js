import bcrypt from 'bcryptjs';
import { signToken } from '../../config/jwt.js';

const users = [];

export const signup = async ({ email, password }) => {
  // const exists = users.find(u => u.email === email);
  // if (exists) throw new Error('User already exists');

  // const hashed = await bcrypt.hash(password, 10);
  // users.push({ email, password: hashed });

  return { message: 'Signup successful' };
};

export const login = async ({ email, password }) => {
  const user = users.find(u => u.email === email);
  if (!user) throw new Error('User not found');

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error('Invalid password');

  return {
    token: signToken({ email })
  };
};