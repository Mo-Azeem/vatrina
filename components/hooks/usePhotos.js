import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

let url = `http://127.0.0.1:5000/api/photos`;
const config = {
  method: "GET",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
};

//This hook is responsible for fetching photos from the backend.
export default function usePhotos(id) {
  if(id) url = `http://127.0.0.1:5000/api/photos/${id}`
  const { data, error } = useSWR([url, config], fetcher);

  return {
    photos: data,
    isLoading: !error && !data,
    isError: error,
  };
}
