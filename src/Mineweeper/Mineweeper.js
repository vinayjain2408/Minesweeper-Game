import React, { useEffect, useState } from 'react'
import "./Mineweeper.css"
import bombImage from './images/bomb-removebg-preview.png';

function Mineweeper() {

    const [check, setCheck] = useState(true)
    const [color, setcolor] = useState([])
    const [bomb, setBomb] = useState([])
    const [score, setScore] = useState(0)



    let array = []

    function getbox() {
        for (let i = 0; i <= 80; i++) {
            array.push(i)
        }
    }

    getbox();

    useEffect(() => {
        getRandom();
    }, []);



    function changecolor(index) {
        if (!bomb.includes(index) ) {
            setcolor([...color, index])
                if( !color.includes(index)){

                    setScore(score + 1)
                }
        }
        else {
            setCheck(!check)
        }
    }



    function getRandom() {
        const min = 1;
        const max = 81;
        const generatedBomb = [];

        for (let i = 0; i < 9; i++) {
            let random;
            do {
                random = Math.floor(Math.random() * (max - min + 1)) + min;
            } while (generatedBomb.includes(random));

            generatedBomb.push(random);
        }

        setBomb(generatedBomb);
    }

    function reset() {
        setScore(0)
        setcolor([])
        getRandom()
    }

    function playagain(){
        setScore(0)
        setcolor([])
        getRandom()
        setCheck(!check)
    }

    return (
        <div className='wrapper'>
            <div className='header'>
                <h1>Mineweeper Game</h1>
                <div className='detail'>
                    <h2>Score : {score}</h2>
                    <button onClick={() => { reset() }}>Reset</button>
                </div>
            </div>
            { 
                !check ? 
                <div className='overlay'>
                    <h1>Game Over</h1>
                    <h2>Score : {score}</h2>
                    <button onClick={() => { playagain() }}>Play Again</button>
                </div> : ""
            }

            <div className='container'>
                {
                    array.map((box, index) => {
                        let boxStyle = check
                            ? {
                                backgroundColor: color.includes(index) && !bomb.includes(index) ? 'blue' : 'white',
                            }
                            : {

                                backgroundColor: bomb.includes(index) ? 'red' : 'blue',
                            };
                        return (
                                <div className='box' key={index}
                                    style={boxStyle}
                                    onClick={() => { changecolor(index) }}>
                                    {bomb.includes(index) && !check ? <img src={bombImage} alt="" /> : ""}
                                </div>

                        )
                    })
                }
            </div>

        </div>
    )
}

export default Mineweeper