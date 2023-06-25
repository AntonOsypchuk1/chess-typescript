import React, {useEffect, useState} from 'react';
import './App.css';
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";
import {Colors} from "./models/Colors";
import {Player} from "./models/Player";
import LostFigures from "./components/LostFigures";
import Timer from "./components/Timer";

function App() {
    const [board, setBoard] = useState(new Board())
    const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

    useEffect(() => {
        restart()
    }, [])

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures();
        setBoard(newBoard);
        setCurrentPlayer(whitePlayer)
    }

    function swapPlayer() {
        setCurrentPlayer(
            currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
        );
    }

    return (
        <div className="App">
            <Timer
                currentPlayer={currentPlayer}
                // restart={restart}
            />
            <div>
                <LostFigures
                    title="Player Black"
                    figures={board.lostWhiteFigures}
                />
            </div>
            <BoardComponent
                board={board}
                setBoard={setBoard}
                currentPlayer={currentPlayer}
                swapPlayer={swapPlayer}
            />
            <div>
                <LostFigures
                    title="Player White"
                    figures={board.lostWhiteFigures}
                />
            </div>
        </div>
    );
}

export default App;
