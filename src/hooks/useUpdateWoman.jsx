import { useState } from "react";

function useUpdateWoman(setWomen, modal) {
  const [userInput, setUserInput] = useState({
    name: "",
    lastName: "",
    nationality: "",
    bio: "",
    photo: "",
  });
  const [updateWomanLoading, setUpdateWomanLoading] = useState(false);
  const [updateWomanError, setUpdateWomanError] = useState(false);

  async function updateWoman(e, id) {
    e.preventDefault();
    setUpdateWomanLoading(true);
    try {
      const response = await fetch(
        `https://66a427c944aa637045837424.mockapi.io/woman/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userInput),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update woman");
      }

      const data = await response.json();

      setWomen((prevWomen) =>
        prevWomen.map((item) => (item.id === data.id ? data : item))
      );

      //Cerramos el modal
      modal();
    } catch (error) {
      console.error(error);
      setUpdateWomanError(true);
    } finally {
      setUpdateWomanLoading(false);
    }
  }

  function handleChangeUpdateWoman(e) {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  }

  return {
    updateWoman,
    handleChangeUpdateWoman,
    userInput,
    setUserInput,
    updateWomanLoading,
    updateWomanError,
  };
}

export default useUpdateWoman;
