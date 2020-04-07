import React, { Component } from 'react';


class Skill extends Component<any> {
    constructor(props:any){
        super(props);
    }
    componentWillMount(){
    }
    render() {
        return (
            <div Style="margin-bottom:100px;">
                <div data-aos="fade-up">
                    <div class="h3 text-center">Skills</div>
                    <hr></hr>
                </div>
                <div data-aos="zoom-in" dangerouslySetInnerHTML={{__html: this.props.data.skill.html}}></div>
            </div>
        );
    }
}

export default Skill;
