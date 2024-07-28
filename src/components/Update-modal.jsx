import { useEffect } from "react";
import "./Update-modal.css";
import useUpdateWoman from "../hooks/useUpdateWoman";

function UpdateModal({ modal, woman, setWomen }) {
  const { updateWoman, handleChangeUpdateWoman, userInput, setUserInput } =
    useUpdateWoman(setWomen, modal);

  useEffect(() => {
    setUserInput({
      name: woman.name,
      lastName: woman.lastName,
      nationality: woman.nationality,
      bio: woman.bio,
      photo: woman.photo,
    });
  }, []);

  return (
    <section className="update-modal" onClick={modal}>
      <div className="update-modal_opened" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={(e) => updateWoman(e, woman.id)}>
          <label htmlFor="name">
            Nombre
            <input
              type="text"
              name="name"
              onChange={handleChangeUpdateWoman}
              value={userInput.name}
            />
          </label>
          <label htmlFor="lastName">
            Apellido
            <input
              type="text"
              name="lastName"
              onChange={handleChangeUpdateWoman}
              value={userInput.lastName}
            />
          </label>
          <label htmlFor="nationality">
            Nacionalidad
            <input
              type="text"
              name="nationality"
              onChange={handleChangeUpdateWoman}
              value={userInput.nationality}
            />
          </label>
          <label htmlFor="bio">
            Biografia
            <textarea
              type="text"
              name="bio"
              onChange={handleChangeUpdateWoman}
              value={userInput.bio}
            />
          </label>
          <label htmlFor="photo">
            Foto
            <input
              type="text"
              name="photo"
              onChange={handleChangeUpdateWoman}
              value={userInput.photo}
            />
          </label>
          <div className="submit-btn">
            <input type="submit" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default UpdateModal;
