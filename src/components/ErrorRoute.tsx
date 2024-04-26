import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="flex flex-col pl-20 pt-20 text-xl gap-4">
      <span>Error 404</span>
      <span>The page you are looking for does not exist on this website</span>
      <Link
        to={"/"}
        className="w-28 bg-yellow-400 text-center text-sm rounded-full px-4 py-2 hover:bg-yellow-300 transition-all duration-300"
      >
        Go back
      </Link>
    </div>
  );
};

export default Error;
