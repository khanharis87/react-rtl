import { useEffect, useState } from "react";

const getData = () => {
  return fetch("http://localhost:8000/")
    .then((res) => {
      return res.json();
    })
    .catch((error) => error);
};

export const useAppState = (apiGetData = getData) => {
  const [coverImages, setCoverImages] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");
  const [showList, setShowList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAppData = async () => {
      try {
        const data = await apiGetData();
        setCoverImages(data.image);
        setLabel(data.label);
        setTitle(data.title);
        setDescription(data.description);
        setShowList(data.bundelItems);
      } catch (error) {
        console.log(error);
        setError(true);
      }
      setIsLoading(false);
    };
    fetchAppData();
  }, []);

  return { coverImages, title, label, description, showList, isLoading, error };
};
