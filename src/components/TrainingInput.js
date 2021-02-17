import React from "react";

class TrainingInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };
    }

    addTraining = () => {
        debugger;
        const { input } = this.state;
        if (input) {
            this.props.addTraining(input);
            this.setState({input: '' });
        }
    };

    handleEnter = event => {
        if (event.key === 'Enter') this.addTraining();
    };

    inputChange = event => {
        this.setState({input: event.target.value});
    };

    render() {
        const { input } = this.state;
        return (
            <div className="task-input">
                <input onKeyPress={this.handleEnter} onChange={this.inputChange} value={input}></input>
                <button onClick={this.addTraining}>ADD</button>
            </div>
        );
    }
}

export default TrainingInput;