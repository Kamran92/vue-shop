import axios from "axios";

const vueQuery = (timeout = 10000) => {
  interface IRequests {
    [index: string]: unknown;
  }
  const requests: IRequests = {};

  interface ILoadings {
    [index: string]: boolean;
  }
  const loadings: ILoadings = {};

  return async (link: string) => {
    if (link in requests) return requests[link];
    if (link in loadings) return {};

    loadings[link] = true;

    const request = await axios.get(link);

    loadings[link] = false;

    setTimeout(() => {
      delete requests[link];
      delete loadings[link];
    }, timeout);

    requests[link] = request.data;

    return request.data;
  };
};

export default vueQuery();
