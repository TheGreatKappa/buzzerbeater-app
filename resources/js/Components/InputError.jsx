import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customId = "custom-id-yes";

export default function InputError({ message }) {

    const notify = () => {
        toast.error(message, {
            toastId: customId,
        });
    };

    return (
    <div>
        {message && notify()}
    </div>
    //message ? <p>{message}</p> : null;
    );
}
