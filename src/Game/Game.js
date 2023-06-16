import React, { useEffect, useState } from 'react'
import "./Game.css"
import picture from "./images/bomb-removebg-preview.png"

function Game() {

    const [color, setColor] = useState([])
    const [score, setScore] = useState(0)
    const [check, setCheck] = useState(true)
    const [bomb, setBomb] = useState([])

    let array = []

    // function arr(){
    for (let i = 0; i <= 80; i++) {
        array.push(i)
    }
    // }
    // arr() 

    function Changlecolor(index) {
        if (!bomb.includes(index)) {
            setColor([...color, index])
            if (!color.includes(index)) {
                setScore(score + 1)
            }
        }
        else {
            setCheck(!check)
        }
    }

    useEffect(() => {
        random()
    }, [])



    function random() {
        // const top = 81;
        // const low = 1;
        // const generatedBomb = []

        // for(let i=0 ; i< 9 ; i++){
        //     let get 
        //     do{
        //         get = Math.floor(Math.random()*(top - low + 1)) +low
        //     }
        //     while(generatedBomb.includes(get))

        //     generatedBomb.push(get)
        //     console.log(get)
        // }
        const top = 81;
        const low = 1;
        const generatedBomb = [];

        for (let i = 0; i < 9; i++) {
            let get = Math.floor(Math.random() * (top - low + 1)) + low;

            if (generatedBomb.includes(get)) {
                i--;
            } else {
                generatedBomb.push(get);
                console.log(get);
            }
        }

        setBomb(generatedBomb)

    }

    function reset(){
        setScore(0)
        setColor([])
        random()
        
    }
    function playagain(){
        setScore(0)
        setColor([])
        setCheck(!check)
        random()
    }




    return (
        <div className='wrapper'>
            <header>
                <div className='main'>
                <h1>Minesweeper Game</h1>
                </div>
                <div className='head'>
                    <h2>Score: {score}</h2>
                    <button onClick={()=>{reset()}}>Reset</button>
                </div>
                
            </header>
            {
                !check ?
                <div className='over'>
                    <h1>Game Over</h1>
                    <h2>Score : {score}</h2>
                    <button onClick={()=>{playagain()}}>Play Again</button>
                </div>
                :  ""
            }

            <div className='contain'>
                {
                    array.map((err, index) => {

                        let checklist = check
                            ? {
                                background: color.includes(index) && !bomb.includes(index) ? "green" : " white"
                            }
                            : {
                                background: color.includes(index) ? "red" : "white"
                            }

                        return (
                            <div className='box'
                                style={checklist}
                                onClick={() => { Changlecolor(index) }}
                                key={index}>
                                {bomb.includes(index) && !check ? <img src={picture} /> : ""}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Game