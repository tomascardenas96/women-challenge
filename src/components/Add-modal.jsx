import useCreateNewWoman from "../hooks/useCreateNewWoman";
import "./Add-modal.css";
import React from "react";

function AddModal({ modal, setWomen, women }) {
  const { handleChangeInput, handleCreateNewWoman, userInput } =
    useCreateNewWoman(setWomen, women);

  return (
    <div className="modal-container" onClick={modal}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <form onSubmit={handleCreateNewWoman}>
          <label htmlFor="name">
            Nombre
            <input
              type="text"
              name="name"
              onChange={handleChangeInput}
              value={userInput.name}
            />
          </label>
          <label htmlFor="lastName">
            Apellido
            <input
              type="text"
              name="lastName"
              onChange={handleChangeInput}
              value={userInput.lastName}
            />
          </label>
          <label htmlFor="nationality">
            Nacionalidad
            <input
              type="text"
              name="nationality"
              onChange={handleChangeInput}
              value={userInput.nationality}
            />
          </label>
          <label htmlFor="bio">
            Biografia
            <textarea
              type="text"
              name="bio"
              onChange={handleChangeInput}
              value={userInput.bio}
            />
          </label>
          <label htmlFor="photo">
            Foto
            <input
              type="text"
              name="photo"
              onChange={handleChangeInput}
              value={userInput.photo}
            />
          </label>
          <div className="submit-btn">
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddModal;
