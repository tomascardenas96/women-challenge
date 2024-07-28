import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import WomanCard from "../../components/WomanCard";
import useGetWomen from "../../hooks/useGetWomen.jsx";
import AddModal from "../../components/Add-modal";
import UpdateModal from "../../components/Update-modal";
import useOpenModal from "../../hooks/useOpenModal";
import "./Home.css";

function Home() {
  const {
    women,
    handleChange,
    filterInput,
    setWomen,
    womenLoading,
    womenError,
  } = useGetWomen();

  const {
    openCloseAddModal,
    openCloseUpdateModal,
    isAddModalOpen,
    isUpdateModalOpen,
    selectedWoman,
  } = useOpenModal();

  return (
    <main>
      <div className="women-title">
        <h1>Mujeres que hicieron historia</h1>
      </div>
      <div className="women-filter">
        <form>
          <label htmlFor="name">Filtrar</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={filterInput.name}
            className="filter-input"
          />
        </form>
        <IoMdAdd className="add-new" onClick={openCloseAddModal} />
      </div>
      <div className="women-list">
        {women.map((woman) => {
          const filtered =
            woman.name.toLowerCase().includes(filterInput.name.toLowerCase()) ||
            woman.lastName
              .toLowerCase()
              .includes(filterInput.name.toLowerCase()) ||
            (
              woman.name.toLowerCase() +
              " " +
              woman.lastName.toLowerCase()
            ).includes(filterInput.name.toLowerCase());

          if (filtered) {
            return (
              <WomanCard
                key={woman.id}
                id={woman.id}
                name={woman.name}
                lastname={woman.lastName}
                nationality={woman.nationality}
                bio={woman.bio}
                image={woman.photo}
                openCloseUpdateModal={() => openCloseUpdateModal(woman)}
                setWomen={setWomen}
              />
            );
          }
          return null;
        })}
      </div>

      {/* Modal para actualizar una tarjeta */}
      {isUpdateModalOpen && selectedWoman && (
        <UpdateModal
          modal={openCloseUpdateModal}
          woman={selectedWoman}
          setWomen={setWomen}
        />
      )}

      {/* Modal para crear una nueva tarjeta */}
      {isAddModalOpen && (
        <AddModal modal={openCloseAddModal} setWomen={setWomen} women={women} />
      )}
    </main>
  );
}

export default Home;
