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
import axios from "axios";
import { Spinner } from "react-bootstrap";

interface IndexState{
  isLoading?:boolean,
  githubData?:any,
  repoData?:any,
}

class IndexPage extends React.Component<any, IndexState> {
  constructor(props:any){
    super(props);
    this.state={
      isLoading:true,
      githubData:null,
      repoData:null,
    }
  }
  componentDidMount(){
    AOS.init({
      easing: 'ease-out-back',
    });

    axios({
      url: 'https://api.github.com/graphql',
      method: 'post',
      data:{
        query:`
          query {
            viewer {
              avatarUrl
              websiteUrl
              isHireable
              bio
              name
              login
              followers {
                totalCount
              }
              repositories(isLocked:false, first:3, orderBy:{field:UPDATED_AT,direction:DESC}) {
                edges {
                  node {
                    name
                    description
                    url
                    stargazers {
                      totalCount
                    }
                    forkCount
                    openGraphImageUrl
                    languages(first:3) {
                      edges {
                        node {
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }`
      },
      headers:{
        'Authorization': 'bearer '+process.env.GITHUB_TOKEN,
      }
    }).then((result)=>{
      this.setState({
        githubData:result.data,
      });
      axios({
        url: 'https://api.github.com/graphql',
        method: 'post',
        data:{
          query:`
            query {
              repos: search(query: "user:${result.data.data.viewer.login} fork:true archived:false sort:updated-desc", type: REPOSITORY, first: 3) {
                edges {
                  node {
                    ... on Repository {
                      nameWithOwner
                      name
                      description
                      url
                      stargazers {
                        totalCount
                      }
                      forkCount
                      openGraphImageUrl
                      languages(first:3) {
                        edges {
                          node {
                            name
                          }
                        }
                      }
                      description
                      descriptionHTML
                      repositoryTopics(first: 10) {
                        edges {
                          node {
                            topic {
                              name
                            }
                          }
                        }
                      }
                      homepageUrl
                      url
                    }
                  }
                }
              }
            }`
        },
        headers:{
          'Authorization': 'bearer '+process.env.GITHUB_TOKEN,
        }
      }).then((result)=>{
        this.setState({
          repoData:result,
          isLoading:false,
        });
      });
    });
  }
  render() {
    if(this.state.isLoading){
      return(
        <div Style="width:100%;height:100vh;display: flex;align-items: center;justify-content: center;">
          <div Style="max-width: 50%;">
            <Spinner animation="grow" />
            Loading..
          </div>
        </div>
      )
    }else{
      return (
        <div>
          <ParallaxHeader githubData={this.state.githubData}></ParallaxHeader>
          <Body githubData={this.state.githubData} repoData={this.state.repoData}></Body>
        </div>
      );
    }
  }
}

export default IndexPage