import axios from "@/plugins/axios";

export const getCategories = async (cityId: string) => {
  const URL = "/ru/api/catalog3/v1/menutags/";
  const params = { city_id: cityId };
  const { data } = await axios.get(URL, { params });
  return data.tags;
};
