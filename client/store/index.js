export const state = () => ({
    locales: ['ko', 'en'],
    locale: 'ko'
})

export const mutations = {
    SET_LANG (state, locale) {
        if (state.locales.includes(locale)) {
            state.locale = locale
        }
    }
}
