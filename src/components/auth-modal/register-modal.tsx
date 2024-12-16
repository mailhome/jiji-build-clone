
import { ModalForm } from "./modal-form";

type Props = {

}
export const RegisterModal = ({ }: Props) => {
    return (
        <ModalForm
            headingTag="Register"
            buttonTitle="Register via email or Phone Number"
            linkHref="Sign In"
            textModal="Don't have an account?" />
    )
}