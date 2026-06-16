import { useEffect } from "react";
import { getEntity } from "../services/entity";

export default function TestEntity() {
  useEffect(() => {
    getEntity("yoruba").then(console.log);
  }, []);

  return <div>Testing...</div>;
}
