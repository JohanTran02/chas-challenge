import { CSSProperties } from "react";
import { FieldErrors } from "react-hook-form";

export type Input = {
  type: string;
  required: boolean;
  property: 'email' | 'password' | 'confirmPassword' | 'displayName';
  error: Partial<FieldErrors<UserValues>>
}

export type UserValues = {
  displayName?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

// geolocation
export type GeoLocationProps = {
  cords: { latitude: number, longitude: number }
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

// type ImageType = 'png' | 'jpeg';

// export type Base64<imageType extends ImageType> = `data:image/${imageType};base64,${string}`


// CC_Backend
export type AccountEndpoint = 'account/register' | 'account/logout' | 'account/login';
export type CameraEndpoint = 'ai/readimage';

// cookies
export type CookiesForUser = {
  email: string;
  accessToken: string;
  displayName: string;
  userId: string;
}

// getstampinfo
export type Stampinfo = {
  stampId: number,
  name: string,
  facts: string,
  rarity: number,
  icon: string,
  latitude: string,
  longitude: string,
  category: { title: string }
}

export type StampCategories = {
  title: string;
  stamps: Stampinfo[];
}

// Mapbox style prop
export type MapboxStyleProp = {
  borderRadius: string;
  background: string;
  translate: string;
  zIndex: string;
  height: string;
  cursor: string;
  width: string;
  inset: string;
}

export type ImageType = {
  src: string,
  alt: string,
  width: number,
  height: number,
  className?: string,
  style?: CSSProperties | undefined,
  priority?: boolean
}

export const isProdImage = process.env.NODE_ENV === "production" ? `/chas-challenge/Images/` : `/Images/`;