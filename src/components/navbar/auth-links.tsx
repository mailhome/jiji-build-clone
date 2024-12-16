
import { LoginForm } from "../auth-modal/login-form";
import { RegisterForm } from "../auth-modal/register-form";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

type Props = {

}
export const AuthLinks = ({ }: Props) => {
    return (
        <div className="flex items-center gap-x-4 lg:gap-x-8 justify-end">
            <Dialog>
                <DialogTrigger className="text-xs md:text-md lg:text-base xl:text-base 2xl:text-lg">
                    Sign In | Registration
                </DialogTrigger>
                <DialogContent className="bg-white w-10/12 md:w-7/12 xl:w-full 2xl:w-full">
                    <RegisterForm />
                </DialogContent>
            </Dialog>

            <Dialog>
                <DialogTrigger className="text-white py-1 px-4 md:py-1 xl:px-6 rounded-sm bg-orange-500 text-xs md:text-md  uppercase lg:text-base xl:text-base 2xl:text-base">
                    Sell
                </DialogTrigger>
                <DialogContent className="bg-white w-10/12 md:w-7/12 xl:w-full 2xl:w-full ">
                    <LoginForm />
                </DialogContent>
            </Dialog>
        </div>
    );
}