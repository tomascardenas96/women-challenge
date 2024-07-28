import { TiDeleteOutline } from "react-icons/ti";
import "./WomanCard.css";
import useDeleteWoman from "../hooks/useDeleteWoman";

function WomanCard({
  id,
  name,
  lastname,
  image,
  nationality,
  bio,
  openCloseUpdateModal,
  setWomen,
}) {
  const { deleteWoman, deleteLoading, deleteError } = useDeleteWoman(setWomen);

  return (
    <>
      <section className="card" onClick={openCloseUpdateModal}>
        <h1 className="card-header">
          {name} {lastname}
        </h1>
        <img src={image} alt="woman" />
        <h2 className="card-nationality">Nationality: {nationality}</h2>
        <p className="card-bio">{bio}</p>
        <TiDeleteOutline
          className="card-delete"
          onClick={(e) => deleteWoman(e, id)}
        />
      </section>
    </>
  );
}

export default WomanCard;
