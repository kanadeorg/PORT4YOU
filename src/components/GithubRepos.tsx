import React from 'react';
import { Card, CardColumns, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons'
import {faCodeBranch} from '@fortawesome/free-solid-svg-icons';

const GithubRepos = (props:any) => {
    const createList = () =>{
        let repos:any[] = [];
        props.repoData.data.data.repos.edges.map((currentValue:any, index:number)=>{
            let languages:string[] = [];
            currentValue.node.languages.edges.map((currentLanguage:any, index:number)=>{
                languages.push(currentLanguage.node.name);
            });
            repos.push(
                <div data-aos="flip-left" class="col-md-4 col-sm-12">
                <Card>
                <Card.Img variant="top" src={currentValue.node.openGraphImageUrl} />
                <Card.Body>
                  <Card.Title>{currentValue.node.name}</Card.Title>
                  <Card.Text>
                    {currentValue.node.description}<br/>
                    {languages.map((currentLanguageName:any, index:number)=>
                        <Badge Style="margin-left:5px;" variant="info">{currentLanguageName}</Badge>)}
                    <hr></hr>
                    <div class="row">
                        <div class="col-sm-6"><FontAwesomeIcon icon={faStar} /> {currentValue.node.stargazers.totalCount}</div>
                        <div><FontAwesomeIcon icon={faCodeBranch} /> {currentValue.node.forkCount}</div>
                    </div>
                  </Card.Text>
                  <Button Style="width:100%;" variant="primary" onClick={()=>window.open(currentValue.node.url)}>Check it out</Button>
                </Card.Body>
              </Card>
              </div>
            )
            // console.log(currentValue.node.openGraphImageUrl)
            // console.log(currentValue);
            // console.log(languages);
            // console.log(currentValue.node.name);
            // console.log(currentValue.node.description);
        });
        return repos;
    }
    return (
        <div data-aos="zoom-in">
        <div class="h3">Recent Public Github Projects</div>
            <div class="row">
                {createList()}
            </div>
        </div>
    );
}

export default GithubRepos;
