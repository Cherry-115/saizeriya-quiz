"use client"
import db from "@/app/db/menu.json"
import { useState } from "react";

interface a {
  "name": String,
  "id": number,
  "type": String
}

function random_choose(data: a[]) {
  const index = Math.floor(Math.random() * data.length);
  return data[index]
}

export default function Page() {
  const [isCorrect, setIsCorrect] = useState<boolean>();
  const [input, setInput] = useState();
  const data = random_choose(db)

  const b = () => {
    if (data.id == input) {
      setIsCorrect(true)
    }
  }
  return (
    <div>
      {
        <>
          <p>question</p>
          <br />
          <p>{data.name}</p>
          <br />
          <input value={input} type="number" min={1000} max={9999} />
          <button onClick={b}>submit</button>
        </>
      }
      {
        isCorrect ? (
          <div>Correct!!</div>
        ) : (
          <div>Uncorrect...</div>
        )
      }
    </div>
  )
}