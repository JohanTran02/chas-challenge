import Mapbox from "@/app/ui/Components/dashboard/map/Mapbox";


export default function Page() {
    const styles = {
        background: '#f6f5ef',
        height: '100vh',
        width: '100vw',
        inset: `-100 0 0 0`,
        zIndex: '2',
        cursor: 'auto',
    }

    return (
        <>
            <Mapbox styleProp={styles} geocontrol={true} navcontrol={true} interactive={true} trackResize={true} />
        </>
    );
}