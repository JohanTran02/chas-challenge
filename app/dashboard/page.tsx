import Posts from '@/app/ui/Components/home/Posts'

export default async function Page() {

    return (
        <>
            <p className='text-white font-bold pt-6 pl-6 pb-3'>NYA HÄNDELSER</p>
            <div className="bg-white max-w-[600px] h-full mx-auto px-4 pt-6 rounded-3xl">
                <div className="flex-1 h-[100%] pb-[90px]">
                    <Posts />
                </div> 
            </div>
        </>
        // null
    )
}
