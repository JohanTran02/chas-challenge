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

// geolocation
export type GeoLocationProps = {
  cords: {latitude: number, longitude: number}
}

type Coordinates = {
  latitude: number;
  longitude: number;
}

export type Activity = {
  id: number; 
  name: string;
  description: string;
  coordinates: Coordinates;
}
