import { Poppins } from 'next/font/google';
import { Inter } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  weight: ['300', '400', '500', '600', '700'],
  display: "swap"
})

export const inter = Inter({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['300', '400', '500', '600', '700'],
  display: "swap"
})