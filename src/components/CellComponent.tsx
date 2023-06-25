import React, {FC} from 'react';
import {Cell} from "../models/Cell";

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell, selected, click}) => {
    return (
        <div
            onClick={() => click(cell)}
            className={['cell', cell.color, selected ? "selected" : '',].join(' ')}
        >
            <div className={cell.available && cell.figure ? "enemy" : ''}></div>
            {cell.available && !cell.figure && <div className="available"/>}
            {cell.figure?.logo && <img src={cell.figure.logo} alt=""/>}
        </div>
    );
};

export default CellComponent;