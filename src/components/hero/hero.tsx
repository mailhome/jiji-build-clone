import { LocateIcon, MapPin, Search } from "lucide-react";
import { WidthContainer } from "../width-container";
import { Input } from "../ui/input";

type Props = {

}
export const Hero = ({ }: Props) => {
    return (
        <div className="bg-[#00992C] w-full h-[30vh] lg:h-[40vh] xl:h-[40vh]">
            <WidthContainer className="w-full min-h-full">
                <div className="flex flex-col items-center justify-center py-10 lg:py-20 xl:py-24 space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12">
                    <div className="flex items-center justify-center w-full">
                        <p className="text-white text-md lg:text-xl xl:text-2xl 2xl:text-3xl flex items-center justify-center ">
                            Find anything in
                            <span className="bg-black flex items-center text-[12px] lg:text-lg xl:text-xl gap-x-2 ml-2 rounded-sm p-[4px] lg:p-2">
                                <MapPin className="size-3 lg:size-5" /> All Nigeria
                            </span>
                        </p>
                    </div>

                    <div className="relative w-10/12 xl:w-8/12 2xl:w-6/12 flex items-center justify-end">
                        <Input className="h-9 md:h-10 lg:h-12 xl:h-14 text-neutral-700 text-sm md:text-md lg:text-xl" placeholder="I am looking for..." />
                        <Search className="absolute mr-4 text-neutral-600 lg:size-8" />
                    </div>
                </div>
            </WidthContainer>
        </div>
    );
}