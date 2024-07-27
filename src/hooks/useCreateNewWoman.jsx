import React, { useState } from "react";

function useCreateNewWoman() {
  const [userInput, setUserInput] = useState({
    id: 1000,
    name: "",
    lastName: "",
    nationality: "",
    bio: "",
    photo: "",
  });

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
    } catch (error) {
      
    }
  }

  function handleChangeInput(e) {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  }

  return { handleChangeInput, handleCreateNewWoman, userInput };
}

export default useCreateNewWoman;
