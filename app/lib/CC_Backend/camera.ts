import { CameraEndpoint } from "../definitions";

export const camera = async (endpoint: CameraEndpoint, base64: string, accessToken: string) => {
    let json;
    let code;

    try {
        const response = await fetch('https://natureai.azurewebsites.net/' + endpoint, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            method: "POST",
            body: JSON.stringify({ prompt: "banana", picture: base64 })
        });

        if (response.status === 200) {
            json = await response.json();
            code = response.status;
            console.log('Status code is 200 and the fetching proccess has been successfully completed!', json)
        }

        if (!response.ok) {
            json = await response.json();
            const errorMessage: { code: string; description: string } = await json[0];

            console.log(response.status, response.statusText, '- json response:', json) // on error
            alert(errorMessage.description);
        }

    } catch (error) {
        console.error('Something went wrong fetching data:', error);
    }

    return { code, json };
}
