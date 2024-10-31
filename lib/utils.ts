import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {  z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const authFormSchema = () =>
  z.object({
    // both
    name: z.string().max(20),
    symbol: z.string().min(8),
    description: z.string().min(20),
  })