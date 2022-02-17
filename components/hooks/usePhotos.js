import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const url = `http://127.0.0.1:5000/api/photos`;
const config = {
    method: 'GET',
    mode: 'cors', 
    headers: {
        'Content-Type': 'application/json'
    },
}

export default function usePhotos() {
  const { data, error } = useSWR([url, config], fetcher);

  return {
    photos: data,
    isLoading: !error && !data,
    isError: error,
  };
}
