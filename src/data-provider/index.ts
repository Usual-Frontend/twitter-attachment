import axios from "axios";
import { DataProvider, HttpError } from "@refinedev/core";
import { supabaseClient } from "../utility";
import { stringify } from "query-string";

// Error handling with axios interceptors
const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const customError: HttpError = {
      ...error,
      message: error.response?.data?.message,
      statusCode: error.response?.status,
    };

    return Promise.reject(customError);
  }
);

export const dataProvider = (supabaseClient: any): DataProvider => {
  const apiUrl = "";
  return {
    getList: async ({ resource }) => {
      const { data, error } = await supabaseClient.from(resource).select("*");
      return {
        data,
        total: data.length || 0,
      };
    },
    create: async ({ resource, variables }) => {
      const url = `${apiUrl}/${resource}`;

      const { data } = await axiosInstance.post(url, variables);

      return {
        data,
      };
    },
    update: async ({ resource, id, variables }) => {
      const url = `${apiUrl}/${resource}/${id}`;

      const { data } = await axiosInstance.patch(url, variables);

      return {
        data,
      };
    },
    deleteOne: async ({ resource, id, variables }) => {
      const url = `${apiUrl}/${resource}/${id}`;

      const { data } = await axiosInstance.delete(url, {
        data: variables,
      });

      return {
        data,
      };
    },
    getOne: async ({ resource, id }) => {
      const url = `${apiUrl}/${resource}/${id}`;

      const { data } = await axiosInstance.get(url);

      return {
        data,
      };
    },
    getApiUrl: () => apiUrl,
  };
};
