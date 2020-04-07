import React, { Component } from 'react';

class Education extends Component<any> {
    constructor(props:any){
        super(props);
    }
    componentWillMount(){
    }
    render() {
        return (
            <div Style="margin-bottom:100px;">
                <div class="h3 text-center">Education</div>
                <hr></hr>
                <div dangerouslySetInnerHTML={{__html: this.props.data.education.html}}></div>
            </div>
        );
    }
}

export default Education;
