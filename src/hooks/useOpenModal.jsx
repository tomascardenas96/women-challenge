import { useState } from "react";

function useOpenModal() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedWoman, setSelectedWoman] = useState(null);

  function openCloseAddModal() {
    setIsAddModalOpen(!isAddModalOpen);
  }

  function openCloseUpdateModal(woman) {
    setSelectedWoman(woman);
    setIsUpdateModalOpen(!isUpdateModalOpen);
  }

  return {
    openCloseAddModal,
    openCloseUpdateModal,
    isAddModalOpen,
    isUpdateModalOpen,
    selectedWoman,
  };
}

export default useOpenModal;
