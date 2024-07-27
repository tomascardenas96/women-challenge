import React, { useCallback, useEffect, useState } from "react";

function useGetWomen() {
  const [women, setWomen] = useState([]);
  const [filterInput, setFilterInput] = useState({
    name: "",
  });

  const getWomen = useCallback(async () => {
    const response = await fetch(
      "https://66a427c944aa637045837424.mockapi.io/woman",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await response.json();
    setWomen(data);
  }, []);

  useEffect(() => {
    getWomen();
  }, [getWomen]);

  function handleChange(e) {
    const { value, name } = e.target;
    setFilterInput({ ...filterInput, [name]: value });
  }

  return {
    women,
    handleChange,
    filterInput,
    setWomen,
  };
}

export default useGetWomen;
