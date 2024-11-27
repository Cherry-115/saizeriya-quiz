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
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [input, setInput] = useState<number | "">();
  const [data, setData] = useState(random_choose(db));

  const b = () => {
    if (data.id == input) {
      setIsCorrect(true)
    }
  }

  const refresh = () => {
    setIsCorrect(null);
    setData(random_choose(db));
    setInput("");
  }
  return (
    <div>
      {
        <>
          <p>question</p>
          <br />
          <p>{data.name}</p>
          <br />
          <input value={input} onChange={e => setInput(e.target.value)} type="number" min={1000} max={9999} />
          <button onClick={b}>submit</button>
        </>
      }

      <div>{isCorrect ? "correct" : "uncorrect"}</div>
      <button onClick={refresh}>next</button>
    </div>
  )
}