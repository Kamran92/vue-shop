import axios from "@/plugins/axios";

export const getCities = async (term: string) => {
  const params = { country: "ru", term };
  const URL = "/api/catalog3/v1/city/";
  const { data } = await axios.get(URL, { params });
  return data.data.slice(0, 5);
};
