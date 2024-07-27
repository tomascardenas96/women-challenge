import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import WomanCard from "../../components/WomanCard";
import useGetWomen from "../../hooks/useGetWomen.jsx";
import AddModal from "../../components/Add-modal";
import "./Home.css";

function Home() {
  const { women, handleChange, filterInput, setWomen } = useGetWomen();

  const [isModalOpen, setIsModalOpen] = useState(false);

  function openCloseModal() {
    setIsModalOpen(!isModalOpen);
  }

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
        <IoMdAdd className="add-new" onClick={openCloseModal} />
        {isModalOpen && (
          <AddModal modal={openCloseModal} setWomen={setWomen} women={women} />
        )}
      </div>
      <div className="women-list">
        {women.map((woman) => {
          if (
            woman.name.toLowerCase().includes(filterInput.name.toLowerCase()) ||
            woman.lastName
              .toLowerCase()
              .includes(filterInput.name.toLowerCase()) ||
            (
              woman.name.toLowerCase() +
              " " +
              woman.lastName.toLowerCase()
            ).includes(filterInput.name.toLowerCase())
          ) {
            return (
              <WomanCard
                name={woman.name}
                lastname={woman.lastName}
                nationality={woman.nationality}
                bio={woman.bio}
                image={woman.photo}
              />
            );
          }
          return null;
        })}
      </div>
    </main>
  );
}

export default Home;
