import './index.css';
import BottomImage from '../../assets/images/bottom-image.svg';
import TopImage from '../../assets/images/top-image.svg';
import useWindowDimensions from "../utils";
import RocketSVG from "../rocket";
import Button from "@mui/material/Button";

const Layout = () => {
  const { height, width } = useWindowDimensions();

  return (
  <div className={"container"} style={{minHeight: height, minWidth: (width-20)}}>
    <img alt={"top cloud"} src={TopImage} className={"top-image"}/>
    <div className={"hour-and-rocket-container"} style={{minHeight: height}}>
      <div className={"clock-text-button-container"}>
        <div className={'title'}>
            ready to launch in...
        </div>
        <div className={'legend'}>
          <div className={"day"}>DD</div>
          <div className={"semi-colon"}>:</div>
          <div className={"hour"}>HH</div>
          <div className={"semi-colon"}>:</div>
          <div className={"min"}>MM</div>
          <div className={"semi-colon"}>:</div>
          <div className={"sec"}>SS</div>
        </div>
        <div className={'clock'}>
          <div className={"day"}>00</div>
          <div className={"semi-colon"}>:</div>
          <div className={"hour"}>00</div>
          <div className={"semi-colon"}>:</div>
          <div className={"min"}>00</div>
          <div className={"semi-colon"}>:</div>
          <div className={"sec"}>00</div>
        </div>
        <div className={'information'}>
            Inscreva-se para saber mais sobre o lançamento
        </div>
        <div className={'button-container'}>
           <Button variant={'outlined'} className={'button-subscribe'}>Inscreva-se!</Button>
        </div>
      </div>
        <RocketSVG/>
    </div>
    <img alt={"bottom cloud"} src={BottomImage} className={"bottom-image"} />
  </div>

  )

}

export default Layout;