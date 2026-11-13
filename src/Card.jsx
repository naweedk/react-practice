function Card({ title, children }) {
  return (
    <div className="content-card">
      <h2>{title}</h2>

      <div className="content-card-body">
        {children}
      </div>
    </div>
  );
}

export default Card;