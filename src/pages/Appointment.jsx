import PropTypes from "prop-types";

export function AppointmentUI({user}) {
  console.log("Estas en citas!")
  return (
    <div>
      <h1>APPOINTMENT de {user.name}</h1>
    </div>
  );
}

AppointmentUI.propTypes = {
  user: PropTypes.object
};