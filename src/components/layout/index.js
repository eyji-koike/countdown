import './index.css';
import BottomImage from '../../assets/images/bottom-image.svg';
import TopImage from '../../assets/images/top-image.svg';
import useWindowDimensions from "../utils/get_window_dimensions";
import RocketSVG from "./rocket/rocket";
import Clock from "./clock/clock";
import Information from "./information/information";
import Button from "./button/button";
import Title from "./title/title";

const Layout = () => {
  const { height, width } = useWindowDimensions();

  return (
  <div className={"container"}>
    <img alt={"top cloud"} src={TopImage} className={"top-image"}/>
    <div className={"hour-and-rocket-container"}>
      <div className={"clock-text-button-container"}>
        <Title />
        <Clock/>
        <Information/>
        <Button />
      </div>
        <RocketSVG/>
    </div>
    <img alt={"bottom cloud"} src={BottomImage} className={"bottom-image"} />
  </div>

  )

}

export default Layout;