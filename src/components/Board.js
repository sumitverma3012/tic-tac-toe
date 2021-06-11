import React from 'react';
import Square from './Square';

const Board = ({squares, onClick}) => {
    console.log(squares);
    return (
        <div className="board">
            {squares.map((square, i) => (
                <Square key={i} onClick={() => onClick(i)} value={square}/>
            ))}
        </div>
    )
}

export default Board;