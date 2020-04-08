import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGitlab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "hover.css";

class Footer extends Component {
    render() {
        return (
            <div data-aos="flip-down" Style="margin-bottom:100px;width:100%;display: flex;align-items: center;justify-content: center;">
                <Card Style="padding:30px;width:90vw;left:auto;right:auto;">
                    <div class="h3 text-center">Contact Me</div>
                    <hr></hr>
                    <div  Style="width:100%;display: flex;align-items: center;justify-content: center;">
                        <div class="row justify-content-center" Style="width:60%;">
                            <div class="col-3 text-center">
                                <a href={`${process.env.GITHUB_URL}`}><FontAwesomeIcon className="hvr-grow" icon={faGithub} size="3x" /></a>
                            </div>
                            <div class="col-3 text-center">
                                <a href={`${process.env.GITLAB_URL}`}><FontAwesomeIcon className="hvr-grow" icon={faGitlab} size="3x" /></a>
                            </div>
                            <div class="col-3 text-center">
                                <a href={`${process.env.LINKEDIN_URL}`}><FontAwesomeIcon className="hvr-grow" icon={faLinkedin} size="3x" /></a>
                            </div>
                            <div class="col-3 text-center">
                                <a href={`mailto:${process.env.EMAIL}`}><FontAwesomeIcon className="hvr-grow" icon={faEnvelope} size="3x" /></a>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

export default Footer;
