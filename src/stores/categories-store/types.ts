export type TCategories = Array<{
  slug: string;
  image: string;
  text_color: string;
  name: string;
  children: Array<{ name: string; slug: string }>;
}>;
