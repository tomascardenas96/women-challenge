import React, { useEffect, useState } from "react";

function useGetWomen() {
  const [women, setWomen] = useState([]);
  const [filterInput, setFilterInput] = useState({
    name: "",
  });

  useEffect(() => {
    async function getWomen() {
      const response = await fetch(
        "https://66a427c944aa637045837424.mockapi.io/woman",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await response.json();

      setWomen(data);
    }

    getWomen();
  }, []);

  function handleChange(e) {
    const { value, name } = e.target;
    setFilterInput({ ...filterInput, [name]: value });
  }

  return {
    women,
    handleChange,
    filterInput,
  };
}

export default useGetWomen;
