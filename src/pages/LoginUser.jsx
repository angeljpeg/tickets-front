import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { HiWrenchScrewdriver } from "react-icons/hi2";

export function LoginUI({ login }) {
  const navigate = useNavigate();
  const handleLogin = () => {
    login();
    navigate("/welcome");
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="">
        <div className="flex items-center gap-4">
          <div className="gap-6 p-2 rounded-full bg-golden w-fit">
            <HiWrenchScrewdriver className="text-5xl text-black" />
          </div>
          <div className="flex items-end gap-1">
            <h1 className="text-6xl font-medium">TI</h1>
            <span className="text-4xl font-normal">go!</span>
          </div>
        </div>

        <div className="mt-4">
          <form className="flex flex-col">
            <div className="mb-2">
              <p className="mb-2">Correo</p>
              <input
                className="hover:bg-neutral-800 transition-all duration-300 ease-in-out px-4 py-2 rounded-lg outline-none border-[1px] border-neutral-600 bg-neutral-900"
                type="text"
              />
            </div>
            <div className="mb-4">
              <p className="mb-2">Contraseña</p>
              <input
                className="hover:bg-neutral-800 transition-all duration-300 ease-in-out p-4 py-2 rounded-lg outline-none border-[1px] border-neutral-600 bg-neutral-900"
                type="password"
              />
            </div>
            <button
              onClick={handleLogin}
              className="relative self-center p-2 overflow-hidden rounded-lg bg-neutral-600 group"
            >
              <span className="relative z-10 font-medium transition-all duration-300 group-hover:text-neutral-700">
                Ingresar
              </span>
              <span className="absolute inset-0 h-full transition-all duration-300 origin-center transform scale-x-0 bg-golden group-hover:scale-x-100 group-hover:w-full"></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

LoginUI.propTypes = {
  login: PropTypes.func,
};
