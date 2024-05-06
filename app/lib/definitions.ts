type ImageType = 'png' | 'jpeg';

export type Base64<imageType extends ImageType> = `data:image/${imageType};base64,${string}`