import img1 from '../assets/images/FriendsMenu/img1.png'
import img2 from '../assets/images/FriendsMenu/img2.png'
import img3 from '../assets/images/FriendsMenu/img3.png'
import img4 from '../assets/images/FriendsMenu/img4.png'
import img5 from '../assets/images/FriendsMenu/img5.png'
import img6 from '../assets/images/FriendsMenu/img6.png'
import img7 from '../assets/images/FriendsMenu/img7.png'
import img8 from '../assets/images/FriendsMenu/img8.png'
import img9 from '../assets/images/FriendsMenu/img9.png'
import img10 from '../assets/images/FriendsMenu/img10.png'
import img11 from '../assets/images/FriendsMenu/img11.png'

const SWITCH_ONLINE = 'SWITCH_ONLINE';
const SET_CURRENT_FRIEND = 'SET_CURRENT_FRIEND';
const SWITCH_PROFILE = 'SWITCH_PROFILE';

let initialState = {
    friends: [
        {id: 0, isOnline: true, image: img1, fullName: 'Orlando Diggs'},
        {id: 1,  isOnline: true, image: img2, fullName: 'Carmen Velasco'},
        {id: 2,  isOnline: true, image: img3, fullName: 'Marie Jensen'},
        {id: 3,  isOnline: true, image: img4, fullName: 'Alex Lee'},
        {id: 4,  isOnline: false, image: img5, fullName: 'Leo Gill'},
        {id: 5,  isOnline: false, image: img6, fullName: 'Britney Cooper'},
        {id: 6,  isOnline: true, image: img1, fullName: 'Orlando Diggs'},
        {id: 7,  isOnline: false, image: img2, fullName: 'Carmen Velasco'},
        {id: 8,  isOnline: true, image: img3, fullName: 'Marie Jensen'},
        {id: 9,  isOnline: true, image: img4, fullName: 'Alex Lee'},
        {id: 10,  isOnline: false, image: img5, fullName: 'Leo Gill'},
        {id: 11,  isOnline: false, image: img6, fullName: 'Britney Cooper'},
        {id: 12,  isOnline: true, image: img1, fullName: 'Orlando Diggs'},
        {id: 13,  isOnline: false, image: img7, fullName: 'Jeshua Stout'},
        {id: 14,  isOnline: true, image: img8, fullName: 'Harold Adams'},
        {id: 15,  isOnline: true, image: img9, fullName: 'Aada Laine'},
        {id: 16,  isOnline: false, image: img10, fullName: 'Nala Hester'},
        {id: 17,  isOnline: false, image: img11, fullName: 'Ramon Bateman'},
    ],
    currentFriend: null,
    isProfile: false,
}

const FriendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_ONLINE: {
            return {
                ...state,
                ...state.friends[action.id].isOnline = action.trueOrFalse
            }
        }
        case SET_CURRENT_FRIEND: {
            return {
                ...state,
                currentFriend: action.id,
                isProfile: true,
            }
        }
        case SWITCH_PROFILE: {
            return {
                ...state,
                isProfile: !state.isProfile,
            }
        }
        default: return state;
    }
}

export const switchOnline = (id, trueOrFalse) => ({ type: SWITCH_ONLINE, id, trueOrFalse })
export const setCurrentFriend = (id) => ({ type: SET_CURRENT_FRIEND, id })
export const setSwitchProfile = () => ({ type: SWITCH_PROFILE })

export default FriendsReducer;