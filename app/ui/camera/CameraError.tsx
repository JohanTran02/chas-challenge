export default function CameraError({ isLoading, addOpacity }: { isLoading: "idle" | "pending" | "finished" | "rejected", addOpacity: Partial<boolean> }) {
    const transition = addOpacity || isLoading.includes("rejected") || isLoading.includes("finished") ? "transition-opacity opacity-100" : "transition-opacity opacity-0";

    return (<>
        <section className={`${transition} absolute bg-white grid place-content-center px-12 h-[600px] rounded-md`}>
            <h1 className="font-bold text-6xl">Ojdå!</h1>
            <div className="text-lg">
                <p className="my-8">Det ser ut som att ditt foto inte fångade rätt objekt. Försök igen och se till att fokusera på rätt mål.</p>
                <h2 className="font-bold">Tips:</h2>
                <p>Var noga med detaljerna på objektet du försöker fotografera.</p>
            </div>
        </section>
    </>
    )
}