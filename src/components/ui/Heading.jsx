import { cn } from "../../lib/utils";

const Heading = ({ className, ...props }) => {
  return (
    <h1
      {...props}
      className={cn("text-4xl font-semibold text-slate-700", className)}
    />
  );
};

export default Heading;
