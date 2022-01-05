import img1 from '../assets/images/FriendsMenu/img1.png'
import img2 from '../assets/images/FriendsMenu/img2.png'
import img3 from '../assets/images/FriendsMenu/img3.png'
import img4 from '../assets/images/FriendsMenu/img4.png'
import img5 from '../assets/images/FriendsMenu/img5.png'
import img6 from '../assets/images/FriendsMenu/img6.png'

const SWITCH_ONLINE = 'SWITCH_ONLINE';

let initialState = {
    friends: [
        { isOnline: true, image: img1, fullName: 'Orlando Diggs', link: '/'},
        { isOnline: true, image: img2, fullName: 'Carmen Velasco', link: '/'},
        { isOnline: true, image: img3, fullName: 'Marie Jensen', link: '/'},
        { isOnline: true, image: img4, fullName: 'Alex Lee', link: '/'},
        { isOnline: false, image: img5, fullName: 'Leo Gill', link: '/'},
        { isOnline: false, image: img6, fullName: 'Britney Cooper', link: '/'},
        { isOnline: true, image: img1, fullName: 'Orlando Diggs', link: '/'},
        { isOnline: false, image: img2, fullName: 'Carmen Velasco', link: '/'},
        { isOnline: true, image: img3, fullName: 'Marie Jensen', link: '/'},
        { isOnline: true, image: img4, fullName: 'Alex Lee', link: '/'},
        { isOnline: false, image: img5, fullName: 'Leo Gill', link: '/'},
        { isOnline: false, image: img6, fullName: 'Britney Cooper', link: '/'},
        { isOnline: true, image: img1, fullName: 'Orlando Diggs', link: '/'},
        { isOnline: false, image: img2, fullName: 'Carmen Velasco', link: '/'},
        { isOnline: true, image: img3, fullName: 'Marie Jensen', link: '/'},
        { isOnline: true, image: img4, fullName: 'Alex Lee', link: '/'},
        { isOnline: false, image: img5, fullName: 'Leo Gill', link: '/'},
        { isOnline: false, image: img6, fullName: 'Britney Cooper', link: '/'},
    ],
}

const FriendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_ONLINE: {
            return {
                ...state,
                ...state.friends[action.id].isOnline = action.trueOrFalse
            }
        }
        default: return state;
    }
}

export const switchOnline = (id, trueOrFalse) => ({ type: SWITCH_ONLINE, id, trueOrFalse })

export default FriendsReducer;