import { useState, useEffect } from "react"
import NavDesktop from "./NavDesktop"
import NavMobile from "./NavMobile"

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth))
    })

    return (
        <header>
            {width <= 925 ? <NavMobile /> : <NavDesktop />}
        </header>
    )
}

export default Header
