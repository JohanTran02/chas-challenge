import ImageHandler from "../../ImageHandler"

type Friend = {
    name: string,
    src: string,
    stampsAmount: number
}

export default function FriendContainer({ showStamps }: { showStamps: boolean }) {

    //Låtsas fetch
    const friends: Friend[] = [
        {
            name: "johan",
            src: "profile-dog.svg",
            stampsAmount: 3
        },
        {
            name: "gabriel",
            src: "profile-beaver.svg",
            stampsAmount: 2
        },
        {
            name: "bengt",
            src: "profile-dog2.svg",
            stampsAmount: 36
        },
        {
            name: "poppy",
            src: "profile-cat.svg",
            stampsAmount: 31
        }
    ]

    return (
        <>
            {
                friends.map((friend, index) => {
                    return (
                        <div className='flex items-center gap-2' key={index}>
                            <ImageHandler image={{
                                src: friend.src,
                                alt: "",
                                width: 0,
                                height: 0,
                                className: "w-20 h-20 object-cover",
                            }} />
                            <div>
                                <h1>{friend.name}</h1>
                                {showStamps && <h2>{friend.stampsAmount} Stamps</h2>}
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}