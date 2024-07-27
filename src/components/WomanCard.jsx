import "./WomanCard.css";

function WomanCard({ name, lastname, image, nationality, bio }) {
  return (
    <section className="card">
      <h1 className="card-header">
        {name} {lastname}
      </h1>
      <img src={image} alt="woman" />
      <h2 className="card-nationality">Nationality: {nationality}</h2>
      <p className="card-bio">{bio}</p>
    </section>
  );
}

export default WomanCard;
