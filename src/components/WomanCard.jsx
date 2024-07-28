import "./WomanCard.css";

function WomanCard({
  id,
  name,
  lastname,
  image,
  nationality,
  bio,
  openCloseUpdateModal,
}) {
  return (
    <>
      <section className="card" onClick={openCloseUpdateModal}>
        <h1 className="card-header">
          {name} {lastname}
        </h1>
        <img src={image} alt="woman" />
        <h2 className="card-nationality">Nationality: {nationality}</h2>
        <p className="card-bio">{bio}</p>
      </section>
    </>
  );
}

export default WomanCard;
