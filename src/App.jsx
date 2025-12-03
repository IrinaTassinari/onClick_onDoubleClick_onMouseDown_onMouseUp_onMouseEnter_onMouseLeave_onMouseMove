import EventsComponent from "./components/EventsComponent/EventsComponent.jsx";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm.jsx";
import ClickCounter from "./components/ClickCounter/ClickCounter.jsx";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel.jsx";

function App() {
  const handleClick = () => {
    console.log('Hello world!')
  };
  console.log(1%4) //1
  console.log(2%4) //2
  console.log(3%4) //3
  console.log(4%4) //0
  return(
    <>
      <div>
          <button onClick={handleClick}>Жмякни меня!</button>
          {/* onclick - атрибут html*/}
      </div>

      <EventsComponent/>
      <FeedbackForm/>
      <ClickCounter/>
      <ImageCarousel/>
    </>
   
  )
}

export default App
