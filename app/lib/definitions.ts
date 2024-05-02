import { FieldErrors } from "react-hook-form";

export type Input = {
  type: string; 
  required: boolean; 
  property: 'email' | 'password'; 
  error: Partial<FieldErrors<UserInputValues>> 
}

export type UserInputValues = {
  email: string; 
  password: string; 
  validate?: string; 
}