function UserCard(props) {
  return (
    <div className="user-card">
      <h2>{props.name}</h2>

      <p>{props.role}</p>

      <p>Experience: {props.experience} years</p>

      <p>Location: {props.city}</p>
    </div>
  );
}

export default UserCard;