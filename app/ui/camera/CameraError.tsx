export default function CameraError() {
    return (
        <section className="flex flex-col px-12">
            <h1 className="font-bold text-6xl">Ojdå!</h1>
            <div className="text-lg">
                <p className="my-8">Det ser ut som att ditt foto inte fångade rätt objekt. Försök igen och se till att fokusera på rätt mål.</p>
                <h2 className="font-bold">Tips:</h2>
                <p>Var noga med detaljerna på objektet du försöker fotografera.</p>
            </div>
        </section>
    )
}