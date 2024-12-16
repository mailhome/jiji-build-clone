"use client"

import { useCallback, useState } from "react";
import { Button } from "../ui/button";

import { LoginModal } from "./login-modal";
import { RegisterModal } from "./register-modal";

export const RegisterForm = () => {

    const [data, setData] = useState(true);

    const [showAll, setShowAll] = useState(true);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [showCurrent, setShowCurrent] = useState(false);

    const toggleAll = () => {
        setShowAll(true);
        setShowCurrent(false);
    };

    const toggleCurrent = () => {
        if (!showCurrent) {
            setShowCurrent(true);
            setShowAll(false);
        }
    }

    return (
        <div className="py-1 flex-col items-center justify-center w-full">
            <div className="relative">
                <div className="grid pt-4 grid-cols-2 justify-center w-full mx-auto gap-x-4">
                    <Button onClick={toggleAll}
                        variant="ghost"
                        className="py-1 lg:py-2 grid-cols-6 border-[1px]  hover:bg-neutral-100 px-6 h-8 text-xs lg:text-base lg:h-10">
                        English
                    </Button>
                    <Button
                        variant="ghost"
                        onClick={toggleCurrent}
                        className="py-1 lg:py-2 border-[1px] grid-cols-6  hover:bg-neutral-100 px-10 h-8 text-xs lg:text-base lg:h-10">
                        Hausa
                    </Button>
                </div>
                <div className="">
                    {showAll ? (
                        <div className="">
                            <LoginModal />
                        </div>
                    ) :
                        (
                            <div className="">
                                Hausa
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
}