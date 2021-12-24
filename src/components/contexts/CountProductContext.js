import React, { useReducer, useState } from "react"

const CountProductContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'INCREMENT_PRODUCT':
            return state + 1
        case 'DECREMENT_PRODUCT':
            if (state === 0) return initialState
            return state -1
        case 'CART_PRODUCT':
            return initialState
        default:
            return state
    }
}


const CountProductProvider = (props) => {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [amountProduct, setAmountProduct] = useState(0)
    const [cartOpen, setCartOpen] = useState(false)
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [id, setId] = useState(1)

    const toggleCart = () => {
        setAmountProduct(amountProduct + count)
    }

    const openCart = () => {
        setCartOpen(!cartOpen)
    }

    const removeProduct = () => {
        setAmountProduct(0)
    }

    const openLightbox = () => {
        setLightboxOpen(!lightboxOpen)
    }

    // CAROUSEL
    const prevSlide = () => {
        if (id === 1) {
            setId(4)
        } else {
            setId(id - 1)
        }
    }

    const nextSlide = () => {
        if (id === 4) {
            setId(1)
        } else {
            setId(id + 1) 
        }
    }

    const moveSlide = index => {
        setId(index)
    }
    
    return (
        <CountProductContext.Provider value={{counterCount: count, counterDispatch: dispatch, amountProduct, toggleCart, cartOpen, openCart, removeProduct, lightboxOpen, openLightbox, id, prevSlide, nextSlide, moveSlide}}>

                {props.children}

        </CountProductContext.Provider>
    )
}

export { CountProductContext, CountProductProvider }