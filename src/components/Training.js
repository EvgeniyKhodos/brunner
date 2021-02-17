import React from "react";
import yesImage from '../assets/images/Yes.jpg';
import noImage from '../assets/images/No.png';

const Training = ({training, ...props}) => {

    const  ActionBtn = () => (
        <div className="action-btn">
            {!training.done
                ? ( <p onClick={props.doneTraining}> <img src={yesImage}/> </p>)
                : ( <p onClick={props.deleteTraining}> <img src={noImage}/> </p>
            )}
        </div>
    );

    const className = 'task ' + (training.done ? 'task-done' : '');

    return (
        <div className={className}>
            <p>{training.title}</p>
            <ActionBtn></ActionBtn>
        </div>
    );
};

export default Training;