import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { ReactNode } from "react";


type Props = {
    children: ReactNode
}

const LandingLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex items-start flex-col flex-1 justify-start">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default LandingLayout;