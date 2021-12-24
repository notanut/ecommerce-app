import Lightbox from "./Lightbox"
import { CountProductContext } from "../contexts/CountProductContext"
import { useContext } from "react"
import datas from "../../datas"


const GalleryImg = () => { 
    const countProduct = useContext(CountProductContext)
    return (
        <>
            <section className="gallery">
                {datas.map((data) => (
                    <img 
                    key={data.id}
                    src={data.bigImg} alt="" 
                    className={`thumbnail ${countProduct.id === data.id ? '' : 'hidden'}`}
                    onClick={() => countProduct.openLightbox()}
                    />
                ))}

                    <div className="prev"
                    onClick={() => countProduct.prevSlide()}
                    >
                        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="currentColor" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                    </div>
                    <div className="next"
                    onClick={() => countProduct.nextSlide()}
                    >
                        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="currentColor" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                    </div>

                <article className="gallery__images">
                    {datas.map((data) => (
                        <div 
                        key={data.id} 
                        className={`gallery__images__wrapper ${countProduct.id === data.id ? 'active' : ''}`}
                        onClick={() => countProduct.moveSlide(data.id)}
                        >
                            <img src={data.smallImg} alt="" 
                            className={countProduct.id === data.id ? 'active' : ''}/>
                        </div>
                    ))}
                </article>
            </section>

            {countProduct.lightboxOpen ? <Lightbox /> : ''}
        </>
    )
}

export default GalleryImg
