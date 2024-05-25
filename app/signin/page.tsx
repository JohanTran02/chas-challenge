import SignIn from "@/app/ui/Components/signin/SignIn";
import { createCookie } from "../action";

export default function Page() {
    return (
        <>
            <SignIn createCookie={createCookie} />
        </>
    );
}
