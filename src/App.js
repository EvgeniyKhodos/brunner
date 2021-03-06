import React from 'react';
import Training from './components/Training'
import TrainingInput from "./components/TrainingInput";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            trainings: [
                {
                    id: 0,
                    date: '19.03.2020',
                    type: 'run',
                    distance: 2,
                    comment: '   My first training',
                    title: 'Create todo-react app',
                    done: false
                },
                {
                    id: 1,
                    date: '25.03.2020',
                    type: 'walking',
                    distance: 6,
                    comment: 'Cool',
                    title: 'Learn JavaScript',
                    done: true
                },
                {
                    id: 2,
                    date: '01.05.2019',
                    type: 'skiing',
                    distance: 4,
                    comment: 'I am tired',
                    title: 'I am tired',
                    done: false
                },
                {
                    id: 3,
                    date: '19.06.2020',
                    type: 'scates',
                    distance: 3,
                    comment: 'i am full of energy',
                    title: 'Learn JavaScript',
                    done: true
                }
            ]
        };
    };

    addTraining = training => {
        this.setState(state => {
            let {trainings} = state;
            trainings.push({
                id: trainings.length !== 0 ? training.length : 0,
                type: training,
                done: false
            });
            return trainings;
        });
    };

    doneTraining = id => {
        const index = this.state.trainings.map(training => training.id).indexOf(id);
        this.setState(state => {
            let {trainings} = state;
            trainings[index].done = true;
            return trainings;
        });
    };

    deleteTraining = id => {
        const index = this.state.trainings.map(training => training.id).indexOf(id);
        this.setState(state => {
            let {trainings} = state;
            delete trainings[index];
            return trainings;
        });
    };

    render() {
        const {trainings} = this.state;
        const activeTrainings = trainings.filter(training => !trainings.done);
        const doneTrainings = trainings.filter(training => trainings.done);

        return (
            <div className="App">
                <h0 className="header">
                    <p>Лучший бегун</p>
                </h0>
                <h1 className="top">
                    <table>
                        <tr>
                            <td>Дата
                                <button>Sort</button>
                            </td>
                            <td>Тип тренировки
                                <button>Sort</button>
                            </td>
                            <td>Дистанция
                                <button>Sort</button>
                            </td>
                            <td>Комментарий</td>
                        </tr>
                    </table>
                </h1>
                {[...activeTrainings, ...doneTrainings].map(training => (
                    <Training doneTraining={() => this.doneTraining(training.id)}
                              deleleTraining={() => this.deleteTraining(training.id)}
                              training={training}
                              key={training.id}
                    ></Training>
                ))}
                <TrainingInput addTraining={this.addTraining}></TrainingInput>
            </div>
        );
    }
};

export default App;
