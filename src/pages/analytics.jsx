import React from 'react'
import BigUserProfileCard from '../components/cards/Bigprofilecard';

const analytics = () => {
    return (
        <div className='mx-4 w-full overflow-hidden'>
            <div className='grid grid-cols-12'>
                <div className='col-span-12 flex justify-center'>
                    <BigUserProfileCard
                        profilePic="https://i.pravatar.cc/"
                        username="John Doe"
                        numPosts={15}
                        numFollowers={500}
                        vpost="posts"
                        sfollow="followers"
                        verified={true}
                    />
                </div>
                <div className='cols-span-12'>

                </div>
            </div>
            
        </div>
    )
}

export default analytics