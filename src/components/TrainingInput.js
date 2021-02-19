import React from "react";

class TrainingInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: '',
            type: '',
            distance: '',
            comment: ''
        };
    }

  addTraining = () => {
        const {date, type, distance, comment} = this.state;
        if (date, type, distance, comment) {
            this.props.addTraining(date, type, distance, comment);
            this.setState({date: '', type: '', distance: '', comment: ''});
        }
    };

    handleEnter = event => {
        if (event.key === 'Enter') this.addTraining();
    };

    inputChange = event => {
        const target = event.target;
        const value = target.type === 'date' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };

    render() {
        const {date, type, distance, comment} = this.state;
        return (
            <div className="task-input">
                <input
                    name="date"
                    type="date"
                    checked={this.state.date}
                    onKeyPress={this.handleEnter}
                    onChange={this.inputChange}></input>
                <input
                    name="type"
                    type="text"
                    onKeyPress={this.handleEnter}
                    onChange={this.inputChange}
                    value={this.state.type}></input>
                <input
                    name="distance"
                    type="number"
                    onKeyPress={this.handleEnter}
                    onChange={this.inputChange}
                    value={this.state.distance}></input>
                <input
                    name="comment"
                    type="text"
                    onKeyPress={this.handleEnter}
                    onChange={this.inputChange}
                    value={this.state.comment}></input>
                <button onClick={this.addTraining}>ADD</button>
            </div>
        );
    }
}

export default TrainingInput;