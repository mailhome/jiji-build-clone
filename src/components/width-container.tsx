import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
}
export const WidthContainer = ({ children, className }: Props) => {
    return (
        <div className={cn("px-4 mx-auto md:mx-w-screen-md lg:max-w-full lg:px-10 xl:px-20", className)}>
            {children}
        </div>
    );
}