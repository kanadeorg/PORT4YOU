import React from "react";
import { Link, graphql } from "gatsby";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../libs/now-ui-kit-react/assets/css/bootstrap.min.css";
import "../libs/now-ui-kit-react/assets/css/now-ui-kit.css";
import "../libs/now-ui-kit-react/assets/demo/demo.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ParallaxHeader from "../components/ParallaxHeader";
import Body from "../components/Body";

interface IndexState{
  isLoading?:boolean,
}

class IndexPage extends React.Component<any, IndexState> {
  constructor(props:any){
    super(props);
    this.state={
      isLoading:true,
    }
  }
  componentDidMount(){
    AOS.init({
      easing: 'ease-out-back',
    });
  }
  handleImgLoaded(){
    console.log("No longer loading");
    this.setState({isLoading:false});
  }
  render() {
    return (
      <div>
        <ParallaxHeader handleImgLoaded={this.handleImgLoaded.bind(this)} githubData={this.props.data}></ParallaxHeader>
        <Body></Body>
      </div>
    );
  }
}

export default IndexPage

export const query = graphql`
query UserAvatarQuery{
    github{
        viewer {
          name
          avatarUrl
          bio
        }
    }
}`
