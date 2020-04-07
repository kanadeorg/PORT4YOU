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
                <div class="h3 text-center">Experience</div>
                <hr></hr>
                <div dangerouslySetInnerHTML={{__html: this.props.data.experience.html}}></div>
            </div>
        );
    }
}

export default Experience;
