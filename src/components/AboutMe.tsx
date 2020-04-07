import React, { Component } from 'react';

interface AboutMeState{

}

class AboutMe extends Component<any, AboutMeState> {
    constructor(props:any){
        super(props);
    }
    componentWillMount(){
    }
    render() {
        return (
            <div Style="margin-bottom:100px;">
                <div data-aos="fade-up">
                    <div class="h3 text-center">About Me</div>
                    <hr></hr>
                </div>
                <div data-aos="zoom-in" dangerouslySetInnerHTML={{__html: this.props.data.aboutme.html}}></div>
            </div>
        );
    }
}

export default AboutMe;
