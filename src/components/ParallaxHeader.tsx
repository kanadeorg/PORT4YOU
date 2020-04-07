import React from "react";
import { Container, Image } from 'react-bootstrap';

// core components

function ParallaxHeader(githubData:any, handleImgLoaded:any) {
  let pageHeader = React.createRef();
  //console.log(githubData.githubData.github.viewer.name);
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <div
      className="page-header clear-filter page-header-small"
      filter-color="blue"
    >
      <div
        className="page-header-image"
        style={{
          backgroundImage: "url(" + githubData.githubData.data.viewer.avatarUrl + ")"
        }}
        ref={pageHeader}
      ></div>
      <Container>
        <div data-aos="zoom-in-down">
          <div className="photo-container">
            <Image Style="height:20vh" src={githubData.githubData.data.viewer.avatarUrl} roundedCircle />
          </div>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="400">
          <h3 className="title">{githubData.githubData.data.viewer.name}</h3>
          <h5>{process.env.JOB_TITLE}</h5>
          <h5>--{githubData.githubData.data.viewer.bio}</h5>
        </div>
      </Container>
    </div>
  );
}

export default ParallaxHeader;
