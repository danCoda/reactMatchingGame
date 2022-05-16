import "./SingleCard.css";

function SingleCard({ card, handleChoice }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div>
        <img src={card.src} className="front" alt="card front" />
        <img
          src="/img/cover.png"
          alt="card back"
          className="back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default SingleCard;
