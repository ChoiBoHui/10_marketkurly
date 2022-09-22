import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { id: 1, title: "[귤림원] 당도선별 GAP 하우스 감귤 500g", sale: "7%", salePrice: "6,780 원", dimmedPrice: "7,300 원", link: "#!" },
    { id: 2, title: "[귤림원] 당도선별 GAP 하우스 감귤 500g", sale: "7%", salePrice: "6,780 원", dimmedPrice: "7,300 원", link: "#!" },
    { id: 3, title: "[귤림원] 당도선별 GAP 하우스 감귤 500g", sale: "7%", salePrice: "6,780 원", dimmedPrice: "7,300 원", link: "#!" },
    { id: 4, title: "[귤림원] 당도선별 GAP 하우스 감귤 500g", sale: "7%", salePrice: "6,780 원", dimmedPrice: "7,300 원", link: "#!" },
    { id: 5, title: "[귤림원] 당도선별 GAP 하우스 감귤 500g", sale: "7%", salePrice: "6,780 원", dimmedPrice: "7,300 원", link: "#!" },
    { id: 6, title: "[귤림원] 당도선별 GAP 하우스 감귤 500g", sale: "7%", salePrice: "6,780 원", dimmedPrice: "7,300 원", link: "#!" },
    { id: 7, title: "[귤림원] 당도선별 GAP 하우스 감귤 500g", sale: "7%", salePrice: "6,780 원", dimmedPrice: "7,300 원", link: "#!" },
    { id: 8, title: "[귤림원] 당도선별 GAP 하우스 감귤 500g", sale: "7%", salePrice: "6,780 원", dimmedPrice: "7,300 원", link: "#!" },
]

const RecommendProducts = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
    }, []);
    const mainSlide = useRef(null);
    const setting = {
        arrows: false,
        //dots: true,
        infinite: false,
        afterChange: index => setIDX(index),
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 4
    }
    return (
        <section className='RecommendProducts'>
            <h2 className='sectionTitle'>이 상품 어때요?</h2>
            <Slider {...setting} ref={mainSlide}>
                {
                    SLIDE.map((slide, idx) => {
                        return (
                            <figure key={slide.id} className={'itm0' + slide.id + (idx === IDX ? ' on' : '')}>
                                <div className="inner">
                                    <a className='link' href={slide.link}>
                                        <div className="imgContainer">
                                            <img src={process.env.PUBLIC_URL + `/assets/images/thumbnail_0${idx + 1}.jpg`} alt="" />
                                        </div>
                                        <p className='title'>{slide.title}</p>
                                        <h2 className='sale'>{slide.sale}</h2>
                                        <p className='salePrice'>{slide.salePrice}</p>
                                        <p className='dimmedPrice'>{slide.dimmedPrice}</p>
                                    </a>
                                </div>
                            </figure>
                        )
                    })
                }
            </Slider>
            <div className="slideArrows">
                <button onClick={() => mainSlide.current.slickPrev()}><i className='xi-angle-left'></i></button>
                <button onClick={() => mainSlide.current.slickNext()}><i className='xi-angle-right'></i></button>
            </div>
        </section>
    )
}

export default RecommendProducts;