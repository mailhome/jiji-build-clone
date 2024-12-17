"use client"

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Props = {
    imgScr: string;
    imgAlt: string;
    featureTitle: string;
    adsTitle: string;
    featureContent: React.ReactElement;
}
export const ProductFeatures = ({
    imgScr,
    imgAlt,
    featureTitle,
    adsTitle,
    featureContent
}: Props) => {

    const [isProductOpen, setIsProductOpen] = useState(false);

    const showfeatureContent = isProductOpen && featureContent;
    return (
        <div className=" w-full">
            <div
                onMouseEnter={() => setIsProductOpen(true)}
                onMouseLeave={() => setIsProductOpen(false)}
                className="bg-neutral-100/50 w-full">
                <div className="flex items-center justify-between w-full px-2 py-1 cursor-pointer hover:bg-neutral-200">
                    <div className="flex items-start justify-start gap-x-3 py-2 w-full">
                        <Image
                            src={imgScr}
                            alt={imgAlt}
                            height={40}
                            width={40} />
                        <div className="flex flex-col gap-y-0 justify-start items-start">
                            <p className="text-neutral-900 text-left text-sm w-[130px]">
                                {featureTitle}
                            </p>
                            <p className="text-neutral-500 text-xs">
                                {adsTitle}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-end">
                        <ChevronRight className="text-neutral-600/50" />
                    </div>
                </div>

                {showfeatureContent && (
                    <div className="w-[300px] bg-white h-[80vh] left-[300px]  absolute top-[428px] border-l-[1px] border-neutral-300 z-100">
                        <div className="w-full px-2 py-4">
                            <div
                                className="flex items-start justify-start gap-y-2 flex-col">
                                <div className=" w-[300px] h-[81.5vh] top-0 -left-0 absolute bg-white" />
                                {featureContent}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}