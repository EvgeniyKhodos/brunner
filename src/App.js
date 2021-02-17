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
                    type: 'skiing',
                    distance: 1,
                    comment: '   My first training',
                    title: 'Create todo-react app',
                    done: false
                },
                {
                    id: 1,
                    date: '20.03.2020',
                    type: 'skiing',
                    distance: 6,
                    comment: 'My first trainingsdfsadfsf',
                    title: 'Learn JavaScript',
                    done: true
                },
                {
                    id: 2,
                    date: '01.05.2019',
                    type: 'skiing',
                    distance: 14567890,
                    comment: 'OU!!!',
                    title: 'Find a good job',
                    done: false
                },
                {
                    id: 3,
                    date: '19.03.2020',
                    type: 'skiingdsfadas',
                    distance: 5,
                    comment: 'dsfsfMy first training',
                    title: 'Learn JavaScript',
                    done: true
                },
                {
                    id: 4,
                    date: '19.03.2020',
                    type: 'skiing',
                    distance: 5,
                    comment: 'My first training',
                    title: 'Find a good job',
                    done: false
                }
            ]
        };
    };

    addTraining = training => {
        this.setState(state => {
            let {trainings} = state;
            trainings.push({
                id: trainings.length !== 0 ? training.length : 0,
                title: training,
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
                            <td>Дата</td>
                            <td>Тип тренировки</td>
                            <td>Дистанция</td>
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
