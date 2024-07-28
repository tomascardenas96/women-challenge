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

  useEffect(() => {
    setUserInput((prev) => ({ id: women.length + 1, ...prev }));
  }, [women]);

  async function handleCreateNewWoman(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://66a427c944aa637045837424.mockapi.io/woman",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userInput),
        }
      );

      const data = await response.json();
      if (data.error) {
        throw new Error();
      }
      setWomen((prevWomen) => [...prevWomen, data]);
      modal();
    } catch (error) {}
  }

  function handleChangeInput(e) {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  }

  return { handleChangeInput, handleCreateNewWoman, userInput };
}

export default useCreateNewWoman;
