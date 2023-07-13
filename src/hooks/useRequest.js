const {REACT_APP_BASE_URL} = process.env;

export const useRequest = () => {
  const request = async ({
    url,
    method = "GET",
    body,
    token,
    headers = {},
  }) => {
    if (token)
      headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("token"))}`;
    const options = {
      method,
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    return fetch(
      `${REACT_APP_BASE_URL}${url}`,
      options
    ).then((res) => res.json());
  };

  return request;
};

export default useRequest;