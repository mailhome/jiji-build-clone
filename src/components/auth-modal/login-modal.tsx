
import { ModalForm } from "./modal-form";

type Props = {

}
export const LoginModal = ({ }: Props) => {
    return (
        <ModalForm
            headingTag="Sign In"
            buttonTitle="Email or Phone Number"
            linkHref="Register"
            textModal="Don't have an account?"
        />
    );
}