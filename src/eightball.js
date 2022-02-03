import React, { useState } from "react";
import getRandom from "./getrandom";


function Eightball(props) {
    const [innerText, setText] = useState("Think of a question");
    const [color, setColor] = useState("black");
    const randomIndex = getRandom(props.answers.length)

    function handleClick() {
        const { msg, color } = props.answers[randomIndex]
        setText(msg);
        setColor(color);
    }

    return (
        <div className="circle" onClick={handleClick} style={{ background: color }}>
            <h1>{ innerText }</h1>
        </div>
    )
}

Eightball.defaultProps = {
    answers: [
      { msg: "It is certain.", color: "green" },
      { msg: "It is decidedly so.", color: "green" },
      { msg: "Without a doubt.", color: "green" },
      { msg: "Yes - definitely.", color: "green" },
      { msg: "You may rely on it.", color: "green" },
      { msg: "As I see it, yes.", color: "green" },
      { msg: "Most likely.", color: "green" },
      { msg: "Outlook good.", color: "green" },
      { msg: "Yes.", color: "green" },
      { msg: "Signs point to yes.", color: "goldenrod" },
      { msg: "Reply hazy, try again.", color: "goldenrod" },
      { msg: "Ask again later.", color: "goldenrod" },
      { msg: "Better not tell you now.", color: "goldenrod" },
      { msg: "Cannot predict now.", color: "goldenrod" },
      { msg: "Concentrate and ask again.", color: "goldenrod" },
      { msg: "Don't count on it.", color: "red" },
      { msg: "My reply is no.", color: "red" },
      { msg: "My sources say no.", color: "red" },
      { msg: "Outlook not so good.", color: "red" },
      { msg: "Very doubtful.", color: "red" }
    ]
  };


export default Eightball;