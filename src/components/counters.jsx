import React, {Component} from 'react';
import Counter from "./counter";

class Counters extends Component {

    render() {
        // object destructuring
        const { onReset, onDelete, onIncreament, counters } = this.props;
        return (
            <div>
                <button  onClick={onReset} className="btn btn-warning">Reset</button> <br />
                { this.props.counters.map( counter =>
                    <Counter
                        key={counter.id}
                        onIncreament = {onIncreament}
                        onDelete = {onDelete}
                        counter = {counter}/> ) }
            </div>
        );
    }

}

export default Counters;