import PropTypes from "prop-types";

export function TechnicianUI({user}) {
  console.log("Solo los técnicos pueden entrar aquí!")
  return (
    <div>
      <h1>TECHNICIAN {user.name}</h1>
    </div>
  );
}

TechnicianUI.propTypes = {
  user: PropTypes.object
};