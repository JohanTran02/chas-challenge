import SignIn from "@/app/ui/Components/signin/SignIn";
import { cookies } from "next/headers";

export default function Page() {
    const cookieStore = cookies();
    cookieStore.set("test", "test");
    return (
        <>
            <SignIn />
        </>
    );
}
