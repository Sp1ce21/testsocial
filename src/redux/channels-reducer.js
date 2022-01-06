const SET_CURRENT_LINK = 'SET_CURRENT_LINK';

let initialState = {
    channels: [
        { text: 'global', link: 'global'},
        { text: 'support', link: 'support'},
        { text: 'marketing', link: 'marketing'},
        { text: 'thailand', link: 'thailand'},
        { text: 'bali', link: 'bali'},
        { text: 'poland', link: 'poland'},
        { text: 'australia', link: 'australia'},
        { text: 'jobs', link: 'jobs'},
        { text: 'startups', link: 'startups'},
        { text: 'italy', link: 'italy'},
        { text: 'freelance', link: 'freelance'},
    ],
    currentLink: null,
}

const ChannelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_LINK: return {
            ...state, currentLink: action.currentLink
        }
        default: return state;
    }
}

export const setCurrentLink = (currentLink) => ({type: SET_CURRENT_LINK, currentLink })

export default ChannelsReducer;