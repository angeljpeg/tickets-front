import PropTypes from "prop-types";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

export function Ticket({ ticket }) {
  console.log(ticket);

  const priorityColors = {
    ALTO: "text-red-500",
    MEDIO: "text-yellow-500",
    BAJO: "text-green-500",
  };

  const stateIcons = {
    COMPLETADO: <FaRegCheckCircle className="text-xl" />,
    "EN PROCESO": <MdAccessTime className="text-2xl" />,
    "NO REVISADO": <FaRegTimesCircle className="text-xl" />,
  };

  return (
    <div
      className={`flex flex-col w-full p-4 bg-neutral-800 rounded-xl h-full`}
    >
      <h2 className="mb-4 text-xl font-semibold">{ticket.titulo}</h2>
      <div className="grid grid-cols-1 gap-2 mb-4 lg:grid-cols-4 md:grid-cols-2">
        <div className="p-4 rounded-lg bg-neutral-700">
          <p>Prioridad</p>
          <p
            className={`text-2xl font-semibold ${
              priorityColors[ticket.prioridad] || "text-neutral-300"
            }`}
          >
            {ticket.prioridad}
          </p>
        </div>
        <div className="p-4 rounded-lg bg-neutral-700">
          <p>Estado</p>
          <div className="flex items-center gap-2">
            {stateIcons[ticket.estado]}
            <p> {ticket.estado}</p>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-neutral-700">
          <p>Fecha solicitud</p>
          <p>{ticket.fechaSolicitud}</p>
        </div>
        <div className="p-4 rounded-lg bg-neutral-700">
          <p>Fecha finalizado</p>
          <p>
            {ticket.fechaFinalizado == null
              ? "No finalizado"
              : ticket.fechaFinalizado}
          </p>
        </div>
      </div>
      <div className="p-4 mb-4 rounded-lg bg-neutral-700">
        <p>Descripción</p>
        <p>{ticket.descripcion}</p>
      </div>
      <button className="p-2 transition-all duration-300 rounded-lg w-fit h-fit bg-neutral-600 hover:bg-golden hover:text-black">
        Ver más
      </button>
    </div>
  );
}

Ticket.propTypes = {
  ticket: PropTypes.object,
};
