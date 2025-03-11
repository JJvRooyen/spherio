import { cn } from "@/lib/cn";

const MaxWidth = ({ className, children }) => {
    return <div className={cn("max-w-7xl mx-auto px-4", className)}>{children}</div>;
};

export default MaxWidth;

