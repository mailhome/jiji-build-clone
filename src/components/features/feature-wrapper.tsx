import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
    imgSrc: string;
    desc: string;
    imgAlt: string;
    className?: string;
    post_ad?: boolean;
    post_content?: React.ReactElement;
}
export const FeatureWrapper = ({
    imgSrc,
    desc,
    imgAlt,
    className,
    post_ad,
    post_content

}: Props) => {
    return (
        <div className="w-full h-40 border-[1px] border-slate-300/50">
            <Link href="#" className="flex flex-col gap-y-3 items-center justify-center h-full">
                <div className="">
                    {post_ad ? post_content :
                        (<Image
                            height={100}
                            width={100}
                            alt={imgAlt}
                            src={imgSrc}
                        />)
                    }
                </div>
                <p className={cn("text-muted-foreground text-xs", className)}>
                    {desc}
                </p>
            </Link>
        </div>
    );
}