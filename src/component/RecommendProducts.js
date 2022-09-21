import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { id: 1, tit: "[귤림원] 당도선별 GAP 하우스 감귤 500g", sale: "7%", salePrice: "6,780 원", dimmedPrice: "7,300 원" },
    { id: 2, tit: "[귤림원] 당도선별 GAP 하우스 감귤 500g", sale: "7%", salePrice: "6,780 원", dimmedPrice: "7,300 원" },
    { id: 3, tit: "[귤림원] 당도선별 GAP 하우스 감귤 500g", sale: "7%", salePrice: "6,780 원", dimmedPrice: "7,300 원" },
    { id: 4, tit: "[귤림원] 당도선별 GAP 하우스 감귤 500g", sale: "7%", salePrice: "6,780 원", dimmedPrice: "7,300 원" },
    { id: 5, tit: "[귤림원] 당도선별 GAP 하우스 감귤 500g", sale: "7%", salePrice: "6,780 원", dimmedPrice: "7,300 원" },
    { id: 6, tit: "[귤림원] 당도선별 GAP 하우스 감귤 500g", sale: "7%", salePrice: "6,780 원", dimmedPrice: "7,300 원" },
    { id: 7, tit: "[귤림원] 당도선별 GAP 하우스 감귤 500g", sale: "7%", salePrice: "6,780 원", dimmedPrice: "7,300 원" },
    { id: 8, tit: "[귤림원] 당도선별 GAP 하우스 감귤 500g", sale: "7%", salePrice: "6,780 원", dimmedPrice: "7,300 원" },
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
        afterChange: index => setIDX(index),
        autoplay: true,
        autoplaySpeed: 5000,
    }
    return (
        <section className='RecommendProducts'>
            <Slider {...setting} ref={mainSlide}>
                {
                    SLIDE.map((slide, idx) => {
                        return (
                            <figure key={slide.id} className={'itm0' + slide.id + (idx === IDX ? ' on' : '')}>
                                <div className="inner">
                                    <a className='link' href={slide.link}>
                                        <p className='content'>{slide.content}</p>
                                        <h2 className='title'>{slide.title}</h2>
                                        <p className='desc'>{slide.desc}</p>
                                        <p className='date'>{slide.date}</p>
                                    </a>
                                </div>
                            </figure>
                        )
                    })
                }
            </Slider>
        </section>
    )
}

export default RecommendProducts;