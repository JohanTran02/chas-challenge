import AllCategories from '@/app/ui/Components/achievements/AllCategories'

export default async function Page() {

    return (
        <>
            <h1 className="text-white text-base font-bold pl-6 pt-6 pb-3">ALLA UPPDRAG</h1>
            <div className="bg-white w-full px-4 pt-6 pb-[80px] rounded-t-3xl">
                <AllCategories />
            </div>
        </>
    );
}