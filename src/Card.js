import "./Card.css";
function Card(props) {
  return (
    <div className="card">
      <div className="card-avatar">
        <img src={props.data.img} alt="user-info" />
      </div>

      <div className="cart-info">
        <h2 className="title">{props.data.name}</h2>
        <p className="position">{props.data.job}</p>
      </div>

      <div className="card-btn">
        <button>Message</button>
      </div>
    </div>
  );
}

export default Card;
