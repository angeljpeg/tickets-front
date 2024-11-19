import PropTypes from "prop-types";
import { Ticket } from "../components/Ticket";
import { tickets } from "../components/data/ticketData";

export function TicketsUI({ user }) {
  return (
    <div className="w-full h-[calc(100vh-4rem)]">
      <div className="absolute top-0 z-1 w-full lg:w-[calc(100%-300px)] h-16 lg:left-[300px] bg-neutral-900 flex items-center">
        <p className="absolute pl-4 ml-4 text-lg border-l left-14 lg:static border-neutral-700 text-neutral-700">
          Tickets
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 mt-14">
        {tickets.map((ticket, index) => (
          <Ticket key={index} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

TicketsUI.propTypes = {
  user: PropTypes.object,
};
