import React, { useCallback, useEffect, useState } from "react";

function useGetWomen() {
  const [women, setWomen] = useState([]);
  const [filterInput, setFilterInput] = useState({
    name: "",
  });
  const [womenLoading, setWomenLoading] = useState(false);
  const [womenError, setWomenError] = useState(false);

  const getWomen = useCallback(async () => {
    setWomenLoading(true);
    try {
      const response = await fetch(
        "https://66a427c944aa637045837424.mockapi.io/woman",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await response.json();
      setWomen(data);
    } catch (error) {
      console.error(error);
      setWomenError(true);
    } finally {
      setWomenLoading(false);
    }
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
    womenLoading,
    womenError,
  };
}

export default useGetWomen;
