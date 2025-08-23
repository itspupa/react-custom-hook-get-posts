import { useEffect, useState } from "react";
import axios from "axios";

export const useBlogPosts = (fetchUrl) => {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPosts(fetchUrl);
  }, [fetchUrl]);

  const getPosts = async (fetchUrl) => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios(fetchUrl);
      setPosts(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  return { posts, isLoading, isError };
};
