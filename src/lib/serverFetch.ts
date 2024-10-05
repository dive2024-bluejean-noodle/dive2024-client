interface ServerFetchOptions {
  baseURL?: string;
  withCredentials?: boolean;
}

interface FetchRequestOptions {
  method: string;
  headers?: HeadersInit;
  body?: string | null;
  credentials?: RequestCredentials;
}

interface FetchResponse<T> {
  data: T;
  result: boolean;
}

class ServerFetch {
  baseURL: string;
  withCredentials: boolean;

  constructor(options: ServerFetchOptions) {
    this.baseURL = options.baseURL || "";
    this.withCredentials = options.withCredentials || false;
  }

  async request<T>(
    url: string,
    method: string,
    data: any = null,
    headers: HeadersInit = {},
  ): Promise<FetchResponse<T>> {
    const fetchOptions: FetchRequestOptions = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      credentials: this.withCredentials ? "include" : "same-origin", // withCredentials가 true이면 'include'
    };

    // POST, PUT 등의 요청에서는 body에 데이터를 포함
    if (data) {
      fetchOptions.body = JSON.stringify(data);
    }

    // URL이 절대 경로가 아니라면 baseURL과 결합
    const fullURL = url.startsWith("http") ? url : `${this.baseURL}${url}`;

    try {
      const response = await fetch(fullURL, fetchOptions);
      console.log(response);
      const data = await response.json();
      console.log(data);
      // status가 200이 없으면 Error를 발생
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }

      // JSON 응답을 파싱하여 반환
      return {
        result: response.ok,
        data: data as T,
      };
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  }

  // GET 요청
  get<T>(url: string, headers: HeadersInit = {}): Promise<FetchResponse<T>> {
    return this.request<T>(url, "GET", null, headers);
  }

  // POST 요청
  post<T>(
    url: string,
    data: any,
    headers: HeadersInit = {},
  ): Promise<FetchResponse<T>> {
    return this.request<T>(url, "POST", data, headers);
  }

  // PUT 요청
  put<T>(
    url: string,
    data: any,
    headers: HeadersInit = {},
  ): Promise<FetchResponse<T>> {
    return this.request<T>(url, "PUT", data, headers);
  }

  // DELETE 요청
  delete<T>(url: string, headers: HeadersInit = {}): Promise<FetchResponse<T>> {
    return this.request<T>(url, "DELETE", null, headers);
  }

  // PATCH 요청
  patch<T>(
    url: string,
    data: any,
    headers: HeadersInit = {},
  ): Promise<FetchResponse<T>> {
    return this.request<T>(url, "PATCH", data, headers);
  }
}

const serverFetch = new ServerFetch({
  baseURL: process.env.NEXT_PRIVATE_API_URL,
  withCredentials: true,
});

export default serverFetch;
