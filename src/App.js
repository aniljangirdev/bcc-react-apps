import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
      {/* <Accordian></Accordian> */}
      {/* <RandomColor></RandomColor> */}
      {/* <StarRating noOfStars={10}></StarRating> */}
      <ImageSlider
        url={"https://picsum.photos/v2/list?page=1&limit=10"}
        limit={5}
      ></ImageSlider>
    </div>
  );
}

export default App;
