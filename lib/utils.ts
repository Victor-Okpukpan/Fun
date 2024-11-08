import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const authFormSchema = () =>
    z.object({
        // both
        Name: z.string().max(20),
        Ticker: z.string().min(3).max(6),
        Logo: z.string(),
        InitialSupply: z.string(),
    });
