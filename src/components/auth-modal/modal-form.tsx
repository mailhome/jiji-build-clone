import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import { RegisterForm } from "./register-form";
import { LoginForm } from "./login-form";
import { LoginModal } from "./login-modal";
import { RegisterModal } from "./register-modal";
import { cn } from "@/lib/utils";

type Props = {
    headingTag: string;
    buttonTitle: string;
    linkHref: string;
    textModal: string;
}

export const ModalForm = ({
    headingTag,
    buttonTitle,
    linkHref,
    textModal,
}: Props) => {

    const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => {
        setIsOpen((value) => !value);
    }

    return (
        <div>
            <div className="w-full py-4 flex flex-col items-start justify-start space-y-4">
                <h1 className="text-neutral-900 text-xs md:lg:text-base ">
                    {headingTag}
                </h1>
                <div className="grid items-center justify-center gap-x-4 grid-cols-12 w-full mx-auto">
                    <Button
                        variant="ghost"
                        className="flex items-center  gap-x-6 pr-8 justify-start md:justify-center py-1 col-span-6 border-[1px] hover:bg-neutral-200 h-8 md:h-10">
                        <FcGoogle className="size-8 md:size-12" />
                        <span className="text-sm md:text-base">Google</span>
                    </Button>

                    <Button
                        variant="default"
                        className="flex items-center gap-x-6 pr-8 justify-start md:justify-center py-1 col-span-6 border-[1px] hover:bg-neutral-200 h-8 md:h-10 bg-blue-600">
                        <FaFacebookF className="size-8 md:size-12" />
                        <span className="text-sm md:text-base font-400">Facebook</span>
                    </Button>

                </div>

                <div className={cn("w-full flex flex-col items-start justify-start space-y-4")}>
                    <Button className="flex items-center justify-center bg-green-500 text-white md:text-base w-full h-8 md:h-10 hover:bg-green-500/50">
                        {buttonTitle}
                    </Button>

                    <p className="items-center justify-center flex text-neutral-800 text-xs w-full mx-auto">{textModal}
                        <span
                            className="ml-1 cursor-pointer text-green-500 font-500">
                            {linkHref}
                        </span>
                    </p>

                    <span className="items-center justify-center flex text-slate-500 text-xs w-full mx-auto">
                        By continuing you agree to the <span className="font-semibold ml-1">Policy and Rules</span>
                    </span>
                </div>

            </div>

        </div>
    );
}