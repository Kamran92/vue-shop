import * as types from "./types";
import axios from "@/plugins/axios";

export const getProducts = async (cityId: string, slug: string) => {
  const URL = `/ru/api/catalog3/v1/menutags/${slug}/`;
  const params = { city_id: cityId };
  const { data } = await axios.get<{ products: types.TProducts }>(URL, {
    params,
  });
  return data.products;
};
