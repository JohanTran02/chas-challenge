import SignIn from "@/app/ui/Components/signin/SignIn";
import { cookies } from "next/headers";

export default function Page() {
    const createCookie = async function (): Promise<void> {
        cookies().set({
            name: 'Session',
            value: "test",
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            // domain: "https://johantran02.github.io/chas-challenge",
            maxAge: 60 * 60 * 24 * 365 * 1000,
            sameSite: "none",
            path: '/',
        })
    }

    return (
        <>
            <SignIn createCookie={createCookie} />
        </>
    );
}
