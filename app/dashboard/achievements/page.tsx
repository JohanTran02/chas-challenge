import MissionsCategory from '@/app/ui/achievements/MissonsCategory'


export default function Page() {
    return (
        <>
            <h1 className="text-white text-base font-bold p-6">ALLA UPPDRAG</h1>
            <div className="bg-white h-full flex flex-wrap justify-around gap-8 w-full px-6 pt-6 pb-24 rounded-t-3xl overflow-y-auto no-scrollbar">
                <MissionsCategory />
            </div>
        </>
    );
}
