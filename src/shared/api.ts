// api.ts
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface RequestOptions {
  method: string;
  headers?: Record<string, string>;
  body?: string | null;
}

const fetchData = async (
  url: string,
  options: RequestOptions,
  params?: Record<string, string>
): Promise<any> => {
  // Append query parameters to the URL if provided
  const queryString = params
    ? `?${new URLSearchParams(params).toString()}`
    : "";
  const config: RequestOptions = {
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Headers": 'Accept',
      "Retry-After": "3600",
      "ngrok-skip-browser-warning": '69420',
      // Add any other headers as needed
    },
    ...options,
  };

  const response = await fetch(`${API_BASE_URL}${url}${queryString}`, config);

  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const getRequest = async (
  url: string,
  params?: Record<string, string>
): Promise<any> => fetchData(url, { method: "GET" }, params);

export const postRequest = async (
  url: string,
  data: any,
  params?: Record<string, string>
): Promise<any> =>
  fetchData(url, { method: "POST", body: JSON.stringify(data) }, params);

export const putRequest = async (
  url: string,
  data: any,
  params?: Record<string, string>
): Promise<any> =>
  fetchData(url, { method: "PUT", body: JSON.stringify(data) }, params);

export const deleteRequest = async (
  url: string,
  params?: Record<string, string>
): Promise<any> => fetchData(url, { method: "DELETE" }, params);
