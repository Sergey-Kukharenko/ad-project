export default {
    state: {
        ads: [
            {
                title: 'First ad',
                description: 'Lorem ipsum dolor sit amet',
                promo: false,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                id: '123'
            },
            {
                title: 'Second ad',
                description: 'Lorem ipsum dolor sit amet',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                id: '1234'
            },
            {
                title: 'Third ad',
                description: 'Lorem ipsum dolor sit amet',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                id: '12345'
            }
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        ads(state) {
            return state.ads
        },
        promoAds(state) {
            return state.ads.filter(ad => {
                return ad.promo === true
            })
        },
        myAds(state) {
            return state.ads
        }
    }
}