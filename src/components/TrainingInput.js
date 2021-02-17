import React from "react";

class TrainingInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            type: '',
            distance: '',
            comment: ''
        };
    }

    addTraining = () => {
        const { input, type, distance, comment } = this.state;
        if (input, type, distance, comment) {
            this.props.addTraining(input, type, distance, comment);
            this.setState({input: '', type: '', distance: '', comment: ''});
        }
    };

    handleEnter = event => {
        if (event.key === 'Enter') this.addTraining();
    };

    inputChange = event => {
        this.setState({
            input: event.target.value,
            type: event.target.value,
            distance: event.target.value,
            comment: event.target.value
        });
        debugger;
    };

    render() {
        const { input, type, distance, comment } = this.state;
        return (
            <div className="task-input">
                <input onKeyPress={this.handleEnter} onChange={this.inputChange} value={input}></input>
                <input onKeyPress={this.handleEnter} onChange={this.inputChange} value={type}></input>
                <input onKeyPress={this.handleEnter} onChange={this.inputChange} value={distance}></input>
                <input onKeyPress={this.handleEnter} onChange={this.inputChange} value={comment}></input>
                <button onClick={this.addTraining}>ADD</button>
            </div>
        );
    }
}

export default TrainingInput;