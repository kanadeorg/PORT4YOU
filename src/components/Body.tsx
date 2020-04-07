import React from 'react';
import { Card } from 'react-bootstrap';
import GithubRepos from './GithubRepos';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Skill from './Skill';
import Education from './Education';

const Body = (props:any) => {
    return (
        <div Style="width:100%;display: flex;align-items: center;justify-content: center;">
            <Card Style="margin-top:-80px;width:90vw;left:auto;right:auto;" body>
                <AboutMe data={props.data}></AboutMe>
                <Skill data={props.data}></Skill>
                <Experience data={props.data}></Experience>
                <Education data={props.data}></Education>
                <GithubRepos repoData={props.repoData}></GithubRepos>
                <div data-aos="zoom-out-right">
                    <Card Style="" body>Items</Card>
                </div>
            </Card>
        </div>
    );
}

export default Body;
