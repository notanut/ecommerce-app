import { CountProductContext } from "../contexts/CountProductContext"
import { useContext } from "react"

import datas from "../../datas"

const Lightbox = () => {
    const countProduct = useContext(CountProductContext)

    return (
        <section className='lightbox'>
            <div className="container-wrapper">
                <div className="lightbox__wrapper">
                    <div className="wrapper">
                        <div className="close" onClick={() => countProduct.openLightbox()}>
                            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="currentColor" fillRule="evenodd"/></svg>
                        </div>
                        
                        <div className="carousel">
                            <div className="prev" onClick={() => countProduct.prevSlide()}>
                                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="currentColor" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                            </div>
                        {datas.map((data) => (
                            <div 
                            key={data.id} 
                            className={countProduct.id === data.id ? '' : 'hidden'}>
                                
                                <img  src={data.bigImg} alt="" className="thumbnail"/>

                            </div>
                        ))}
                            <div className="next" onClick={() => countProduct.nextSlide()}>
                                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="currentColor" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                            </div>
                        </div>
                    </div>
                    <article className="lightbox__wrapper__images">
                        {datas.map((data) => (
                            <div 
                            className={`wrapper ${countProduct.id === data.id ? 'active' : ''}`}    
                            key={data.id} >
                                <img 
                                src={data.smallImg} 
                                alt="" 
                                className={`background ${countProduct.id === data.id ? 'active' : ''}`}
                                onClick={() => countProduct.moveSlide(data.id)}
                                />
                            </div>
                        ))}
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Lightbox
