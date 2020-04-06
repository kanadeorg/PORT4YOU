import React from "react";
import { Container, Image } from 'react-bootstrap';

// core components

function ParallaxHeader(githubData:any, handleImgLoaded:any) {
  let pageHeader = React.createRef();

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
            backgroundImage: "url(" + githubData.githubData.github.viewer.avatarUrl + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div data-aos="zoom-in-down">
            <div className="photo-container">
              <Image onLoad={()=>handleImgLoaded} Style="height:20vh" src={githubData.githubData.github.viewer.avatarUrl} roundedCircle />
            </div>
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="400">
            <h3 className="title">{githubData.githubData.github.viewer.name}</h3>
            <h5>{process.env.JOB_TITLE}</h5>
            <h5>--{githubData.githubData.github.viewer.bio}</h5>
          </div>
        </Container>
      </div>
  );
}

export default ParallaxHeader;
