import SignIn from "@/app/ui/Components/signin/SignIn";
import { cookies } from "next/headers";

export default async function Page() {
    const setCookie = async () => {
        const cookieStore = cookies();
        cookieStore.set("test", "test");
    }

    await setCookie();
    return (
        <>
            <SignIn />
        </>
    );
}
