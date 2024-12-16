import LogoImage from "@/assets/logo-jiji.png"
import Image from "next/image";

type Props = {

}
export const Logo = ({ }: Props) => {
    return (
        <div className="relative h-10 w-10 lg:h-12 lg:w-12 xl:w-16 xl:h-16 2xl:h-20 2xl:w-20">
            <Image
                src={LogoImage}
                alt="Logo"
                fill
                className="absolute" />
        </div>
    );
}