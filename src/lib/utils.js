import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import 'dotenv/config'
import jwt from 'jsonwebtoken'


export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30d",
  });
};