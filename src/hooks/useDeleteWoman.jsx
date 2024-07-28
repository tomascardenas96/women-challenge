import { useState } from "react";

function useDeleteWoman(setWomen) {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState(false);

  async function deleteWoman(e, id) {
    e.stopPropagation();
    setDeleteLoading(true);

    try {
      const response = await fetch(
        `https://66a427c944aa637045837424.mockapi.io/woman/${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Error trying to delete a woman card");
      }

      const data = await response.json();

      setWomen((prev) => {
        return prev.filter((woman) => woman.id !== data.id);
      });
    } catch (error) {
      console.error(error);
      setDeleteError(true);
    } finally {
      setDeleteLoading(false);
    }
  }

  return { deleteWoman, deleteLoading, deleteError };
}

export default useDeleteWoman;
