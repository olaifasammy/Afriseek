import { useEffect, useState } from "react";
import { getEntities } from "../services/entities";

export function useEntities() {
  const [entities, setEntities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEntities()
      .then((data) => {
        setEntities(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return {
    entities,
    loading
  };
}