import axios from "axios";

const baseURL = "https://stage.uslotu.info/api/v1"; // базовий URL

function getAccessTokenFromLS(): string | null {
  try {
    const raw = localStorage.getItem("auth");
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed?.state?.accessToken ?? null;
  } catch {
    return null;
  }
}

export const http = async <T = any>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  data?: unknown
): Promise<T> => {
  const token = getAccessTokenFromLS();
  // console.log(getAccessTokenFromLS(), "getAccessTokenFromLS");

  const response = await axios({
    baseURL,
    url,
    method,
    data,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  return response.data;
};
