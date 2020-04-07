import React from 'react';
import { Card } from 'react-bootstrap';
import GithubRepos from './GithubRepos';

const Body = (props:any) => {
    return (
        <div Style="width:100%;display: flex;align-items: center;justify-content: center;">
            <Card Style="margin-top:-80px;width:90vw;left:auto;right:auto;" body>
            <GithubRepos repoData={props.repoData}></GithubRepos>
            <div data-aos="zoom-out-right">
                <Card Style="" body>Items</Card>
            </div>
            </Card>
        </div>
    );
}

export default Body;
