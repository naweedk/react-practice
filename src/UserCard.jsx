
function UserCard({
  name = "Unknown",
  role = "Not specified",
  experience = 0,
  city = "Not available",
}) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>{role}</p>
      <p>Experience: {experience} years</p>
      <p>Location: {city}</p>
    </div>
  );
}

export default UserCard;