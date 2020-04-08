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
import { Spinner, Card } from "react-bootstrap";
import Footer from "../components/Footer";
import MetaTags from 'react-meta-tags';

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

        <div Style="width:100vw;overflow-x:hidden;">
          <MetaTags>
            <title>{this.state.githubData.data.viewer.name} - PORT4YOU</title>
            <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no;" />
            <meta name="Description" content={`Author:${this.state.githubData.data.viewer.name}, Email:${process.env.EMAIL}, GitHub:${process.env.GITHUB_URL}, Linkedin:${process.env.LINKEDIN_URL}, GitLab:${process.env.GITLAB_URL}, Madeby: PORT4YOU`}></meta>
          </MetaTags>
          <ParallaxHeader githubData={this.state.githubData}></ParallaxHeader>
          <Body githubData={this.state.githubData} repoData={this.state.repoData} data={this.props.data}></Body>
          <Footer></Footer>
          <Card Style="padding:30px;width:100vw;left;margin-bottom:0px;">
            <small class="text-muted text-right">Created by GatsbyJS - Powered by <a href="https://github.com/andywang0625">Kanade W.</a> and YOU!</small>
          </Card>
        </div>
      );
    }
  }
}

export default IndexPage

export const query = graphql`
{
  aboutme: markdownRemark(frontmatter: {title:{eq:"aboutme"}}){
    html
  },
  experience: markdownRemark(frontmatter: {title:{eq:"experience"}}){
    html
  },
  skill: markdownRemark(frontmatter: {title:{eq:"skill"}}){
    html
  },
  education: markdownRemark(frontmatter: {title:{eq:"education"}}){
    html
  }
}
`;