import PropTypes from "prop-types";
import Calendar from "../components/Calendario";

export function CalendarUI({ user }) {
  console.log("Estas en el calendario!");
  return (
    <div className="w-full h-[calc(100vh-4rem)]">
      <div className="absolute top-0 z-1 w-full lg:w-[calc(100%-300px)] h-16 lg:left-[300px] bg-neutral-900 flex items-center">
        <p className="absolute pl-4 ml-4 text-lg border-l left-14 lg:static border-neutral-700 text-neutral-700">
          Calendario
        </p>
      </div>
      <div className="p-4 mt-14">
        <Calendar />
      </div>
    </div>
  );
}

CalendarUI.propTypes = {
  user: PropTypes.object,
};
