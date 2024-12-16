import { WidthContainer } from "../width-container";
import { AuthLinks } from "./auth-links";
import { Logo } from "./logo";

type Props = {

}
export const Navbar = ({ }: Props) => {
    return (
        <div className="bg-[#00B53F] text-white w-full lg:h-14 xl:h-16 2xl:h-20 shadow-lg">
            <WidthContainer>
                <div className="flex flex-row items-center justify-between lg:py-1">
                    <Logo />
                    <AuthLinks />
                </div>
            </WidthContainer>
        </div>
    );
}