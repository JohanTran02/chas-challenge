import Posts from '../ui/home/Posts'

export default function Page() {
    return (
        <div className="max-w-[600px] h-full mx-auto px-4">
            <p className='py-2 font-semibold'>NYA HÄNDELSER</p>
            <div className="flex-1 h-[90%] overflow-y-auto no-scrollbar">
                <Posts />
            </div> 
        </div>
        // null
    )
}
