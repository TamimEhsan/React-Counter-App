import React, {Component} from 'react';

class Counter extends Component {
    styles = {
        fontSize: 20,
        fontWeight:"bold"
    }

    render() {
        //console.log('props',this.props);
        return (
            <React.Fragment>
                <span style = {this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={()=>this.props.onIncreament(this.props.counter)}
                    className="btn btn-secondary btn-sm">Increament</button>
                <button className="btn btn-danger m-2" onClick={()=>this.props.onDelete(this.props.counter.id)}> Delete</button>
                <br />
            </React.Fragment>
        );
    }



    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += (this.props.counter.value === 0) ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;