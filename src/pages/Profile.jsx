import PropTypes from "prop-types";

export function ProfileUI({user}) {
  console.log("Estas en la información del perfil!")
  return (
    <div>
      <h1>Profile de {user.name}</h1>
    </div>
  );
}

ProfileUI.propTypes = {
  user: PropTypes.object
};