import Posts from '@/app/ui/Components/home/Posts'

export default function Page() {
    return (
        <>
            <p className='text-white font-bold p-6'>NYA HÄNDELSER</p>
            <div className="bg-white max-w-[600px] h-full mx-auto px-4 pt-6 rounded-3xl">
                <div className="flex-1 h-[90%] overflow-y-auto no-scrollbar">
                    <Posts />
                </div> 
            </div>
        </>
        // null
    )
}
