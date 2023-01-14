export interface IProduct {
  main_image_thumb_300?: string;
  category?: { name?: string };
  present_name?: string;
  comment_name?: string;
  price?: string;
  allowed: boolean;
  available: boolean;
}

export type TProducts = Array<IProduct>;
