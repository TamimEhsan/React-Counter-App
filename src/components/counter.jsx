import React, {Component} from 'react';

class Counter extends Component {
    state = {
        value:this.props.value,
        tags: ['tag1','tag2','tag3']
    };
   /* constructor() {
        super();
        this.handleIncreament = this.handleIncreament.bind(this);
    }
    */
    styles = {
        fontSize: 20,
        fontWeight:"bold"
    }

    render() {
        //console.log('props',this.props);
        return (
            <React.Fragment>
                <span style = {this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncreament} className="btn btn-secondary btn-sm">Increament</button>
                <button className="btn btn-danger m-2"> Delete</button>
                <br />
            </React.Fragment>
        );
    }

    handleIncreament = () => {
        this.setState({value:this.state.value+1});
    }
    renderTags(){
        if( this.state.tags.length === 0 ){
            return <p>There are no tags!</p>;
        } else{
            return (
                <ul className="list-group list-group-horizontal-md">
                    {this.state.tags.map(tag => <li  className="list-group-item" key={tag}>{tag}</li>)}
                </ul>
            );
        }
    }
    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += (this.state.value === 0) ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount(){
        const { value } = this.state;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;