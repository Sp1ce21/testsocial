let initialState = {
    channels: [
        { text: 'global', link: '/'},
        { text: 'support', link: '/'},
        { text: 'marketing', link: '/'},
        { text: 'thailand', link: '/'},
        { text: 'bali', link: '/'},
        { text: 'poland', link: '/'},
        { text: 'australia', link: '/'},
        { text: 'jobs', link: '/'},
        { text: 'startups', link: '/'},
        { text: 'italy', link: '/'},
        { text: 'freelance', link: '/'},
    ],
}

const ChannelsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default ChannelsReducer;