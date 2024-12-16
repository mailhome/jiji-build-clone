import { Plus } from "lucide-react";

type Props = {

}
export const PostContent = ({ }: Props) => {
    return (
        <div className="w-[80px] h-[80px] bg-red-700 rounded-full">
            <div className="flex items-center justify-center flex-col h-full">
                <Plus className="text-white size-10" />
            </div>
        </div>
    );
}