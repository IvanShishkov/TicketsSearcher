import {
    BROWSE,
    FAVOURITES,
    LOAD_CARDS,
    TOGGLE_HEART,
    PINK,
    EMPTY,
    LINE_ON,
    LINE_OFF,
} from '../types'

const initialState = {
    browseCards: [],
    favouritesCards: [],
    favouritesScreen: [],
    browseScreen: [],
    pinkHeart: [],
    emptyHeart: [],
    lineON: [],
    lineOFF: [],
}

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CARDS:
            return {
                ...state,
                browseCards: action.payload,
                favouritesCards: action.payload.filter((card) => card.booked),
            }
        case FAVOURITES:
            return {
                ...state,
                favouritesScreen: action.payload,
            }
        case BROWSE:
            return {
                ...state,
                browseScreen: action.payload,
            }
        case PINK:
            return {
                ...state,
                pinkHeart: action.payload,
            }
        case EMPTY:
            return {
                ...state,
                emptyHeart: action.payload,
            }
        case LINE_ON:
            return {
                ...state,
                lineON: action.payload,
            }
        case LINE_OFF:
            return {
                ...state,
                lineOFF: action.payload,
            }
        case TOGGLE_HEART:
            const allCards = state.browseCards.map((card) => {
                if (card.id === action.payload) {
                    card.booked = !card.booked
                }
                return card
            })

            return {
                ...state,
                allCards,
                favouritesCards: allCards.filter((card) => card.booked),
            }
        default:
            return state
    }
}
