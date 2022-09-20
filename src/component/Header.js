import TopBanner from './TopBanner';

const Header = () => {
    return (
        <header className='Header'>
            {/* 탑 배너 */}
            <TopBanner />
            {/* 상단 메뉴 */}
            <ul className="topMenu">
                <li><a href="#!">회원가입</a></li>
                <li><a href="#!">로그인</a></li>
                <li>
                    고객센터<i className="xi-caret-down-min"></i>
                    <ul>
                        <li><a href="#!">공지사항</a></li>
                        <li><a href="#!">자주하는 질문</a></li>
                        <li><a href="#!">1:1 문의</a></li>
                        <li><a href="#!">대량주문 문의</a></li>
                    </ul>
                </li>
            </ul>
            {/* 중간 메뉴 */}
            <h1><a href="/"><img src="" alt="" /></a></h1>
            <div className="quickMenu">
                <a href="#!">마켓컬리</a>
                <a href="#!" className="Nitm">뷰티컬리</a>
            </div>
            <div className="search">
                <input type="search" placeholder="검색어를 입력해주세요" />
                <i className="xi-search"></i>
            </div>
            <ul className="customerMenu">
                <li>
                    <a href=""><i className="xi-maker"></i></a>
                    <div>
                        <span>배송지를 등록하고</span>구매 가능한 상품을 확인하세요!
                        <button className="login">로그인</button>
                        <button className="searchAdr"><i className="xi-search">주소 검색</i></button>
                    </div>
                </li>
                <li><a href=""><i className="xi-heart-o"></i></a></li>
                <li><a href=""><i className="xi-cart-o"></i></a></li>
            </ul>
            {/* 하단 메뉴 영역 */}
            <nav className="GNB">
                <div className="category">
                    <i className="xi-bars">카테고리</i>
                    <ul className="LNB">
                        <li>
                            <a href="#!"><i className="xi-gift-o"></i>선물하기</a>
                            <ul className="SNB">
                                <li><a href="#!">건강식품</a></li>
                                <li><a href="#!">건강식품</a></li>
                                <li><a href="#!">건강식품</a></li>
                                <li><a href="#!">건강식품</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#!"><i className="xi-gift-o"></i>채소</a>
                            <ul>
                                <li><a href="#!">친환경</a></li>
                                <li><a href="#!">친환경</a></li>
                                <li><a href="#!">친환경</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <ul className="mainMenu">
                    <li><a href="#!">신상품</a></li>
                    <li><a href="#!">베스트</a></li>
                    <li><a href="#!">알뜰쇼핑</a></li>
                    <li><a href="#!">특가/혜택</a></li>
                </ul>
                <div className="delivery">
                    <a href="#!"><span>샛별・낮</span>배송안내</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;