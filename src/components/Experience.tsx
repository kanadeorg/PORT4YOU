import React, { Component } from 'react';


class Experience extends Component<any> {
    constructor(props:any){
        super(props);
    }
    componentWillMount(){
    }
    render() {
        return (
            <div Style="margin-bottom:100px;">
                <div data-aos="fade-up">
                    <div class="h3 text-center">Experience</div>
                    <hr></hr>
                </div>
                <div data-aos="zoom-in" dangerouslySetInnerHTML={{__html: this.props.data.experience.html}}></div>
            </div>
        );
    }
}

export default Experience;
