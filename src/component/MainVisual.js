import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { id: 1, title: "1월 특별 감사제", content: "깊고 오랜 사랑에 보답하는", desc: "컬리 러버스 등급 UP & 쿠폰 증정 혜택", date: "09.15 - 09.30", link: "#!" },
    { id: 2, title: "2월 특별 감사제", content: "깊고 오랜 사랑에 보답하는", desc: "컬리 러버스 등급 UP & 쿠폰 증정 혜택", date: "09.15 - 09.30", link: "#!" },
    { id: 3, title: "3월 특별 감사제", content: "깊고 오랜 사랑에 보답하는", desc: "컬리 러버스 등급 UP & 쿠폰 증정 혜택", date: "09.15 - 09.30", link: "#!" },
    { id: 4, title: "4월 특별 감사제", content: "깊고 오랜 사랑에 보답하는", desc: "컬리 러버스 등급 UP & 쿠폰 증정 혜택", date: "09.15 - 09.30", link: "#!" },
    { id: 5, title: "5월 특별 감사제", content: "깊고 오랜 사랑에 보답하는", desc: "컬리 러버스 등급 UP & 쿠폰 증정 혜택", date: "09.15 - 09.30", link: "#!" },
    { id: 6, title: "6월 특별 감사제", content: "깊고 오랜 사랑에 보답하는", desc: "컬리 러버스 등급 UP & 쿠폰 증정 혜택", date: "09.15 - 09.30", link: "#!" }
]

const MainVisual = () => {
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
        <section className="MainVisual">
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

            <div className="slideNum">
                0{IDX + 1}<span> / 0{SLIDE.length}</span>
            </div>
            <div className="slideArrows">
                <button onClick={() => mainSlide.current.slickPrev()}><i className='xi-angle-left'></i></button>
                <button onClick={() => mainSlide.current.slickNext()}><i className='xi-angle-right'></i></button>
            </div>
        </section>
    )
}

export default MainVisual;