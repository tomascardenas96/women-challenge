import { useEffect, useState } from "react";

function useCreateNewWoman(setWomen, women, modal) {
  const [userInput, setUserInput] = useState({
    id: 0,
    name: "",
    lastName: "",
    nationality: "",
    bio: "",
    photo: "",
  });
  const [newWomanLoading, setNewWomanLoading] = useState(false);
  const [newWomanError, setNewWomanError] = useState(false);

  useEffect(() => {
    setUserInput((prev) => ({ id: women.length + 1, ...prev }));
  }, [women]);

  async function handleCreateNewWoman(e) {
    e.preventDefault();
    setNewWomanLoading(true);
    try {
      const response = await fetch(
        "https://66a427c944aa637045837424.mockapi.io/woman",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userInput),
        }
      );

      if (!response.ok) {
        throw new Error("Error trying to create a new woman card");
      }

      const data = await response.json();
      setWomen((prevWomen) => [...prevWomen, data]);
      modal();
    } catch (error) {
      console.error(error);
      setNewWomanError(true);
    } finally {
      setNewWomanLoading(false);
    }
  }

  function handleChangeInput(e) {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  }

  return {
    handleChangeInput,
    handleCreateNewWoman,
    userInput,
    newWomanLoading,
    newWomanError,
  };
}

export default useCreateNewWoman;
