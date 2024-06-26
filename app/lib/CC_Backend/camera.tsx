import { Dispatch, SetStateAction } from "react";
import { CameraEndpoint } from "../definitions";

export const camera = async (endpoint: CameraEndpoint, base64: string, accessToken: string, stampName: string, coords: string[] | undefined, setLoading: Dispatch<SetStateAction<"idle" | "pending" | "finished" | "rejected">>) => {
    let json;
    let code;

    const image = base64.replace("data:image/jpeg;base64,", "");
    try {
        const response = await fetch('https://natureai.azurewebsites.net/' + endpoint, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            method: "POST",
            body: JSON.stringify({ prompt: stampName, picture: image, coordinates: coords })
        });

        if (response.status === 200) {
            json = await response.json();
            code = response.status;
            console.log('Status code is 200 and the fetching proccess has been successfully completed!', json)
            if (json) {
                setLoading("finished");
            }
            else setLoading("rejected");
            return { code, json };
        }

        if (response.status !== 200) {
            json = await response.json();
            const errorMessage: { code: string; description: string } = await json[0];

            console.log(response.status, response.statusText, '- json response:', json) // on error
            alert(errorMessage.description);
            setLoading("rejected");
        }

    } catch (error) {
        console.error('Something went wrong fetching data:', error);
    }

    return { code, json };
}
