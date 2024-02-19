import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"



import 'dotenv/config'
import { connect } from 'mongoose';
import jwt from 'jsonwebtoken'


const uri = process.env.MONGODB_URI;
const connection = {}
export const connectDB = async () => {
  try {
    if(connection.isConnected) {
        console.log('Using existing connection');
        return
    }
    const db = await connect(uri);
    connection.isConnected= db.connections[0].readyState
    console.log("successfully connected");
  } catch (e) {
    console.log(e);
    throw new Error(e)
  }
};

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30d",
  });
};