import './App.css';
import Header from './component/Header';
import MainVisual from './component/MainVisual';
import RecommendProducts from './component/RecommendProducts';
import LineBanner_01 from './component/LineBanner_01';
// import TimeDeal from './component/TimeDeal';
// import MDPick from './component/MDPick';
// import KurlyRecipe from './component/KurlyRecipe';
// import LineBanner_02 from './component/LineBanner_02';
// import InstagramReview from './component/InstagramReview';
// import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <div className='Wrap'>
        <Header />
        <MainVisual />
        <RecommendProducts />
        <LineBanner_01 />
        {/* <TimeDeal />
        <MDPick />
        <KurlyRecipe />
        <LineBanner_02 />
        <InstagramReview />
        <Footer /> */}
      </div>
    </div>
  );
}

export default App;
