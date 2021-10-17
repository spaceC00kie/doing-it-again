import React, { useState } from "react"

const Button = ({ msg }) => {
  const [count, setCount] = useState(0)
  return (
    <div className="flex h-screen justify-center items-center">
      <p>{count}</p>
      <button
        className="bg-green-400 bg-opacity-25 p-8 ring-4 rounded-lg  hover:bg-green-700"
        onClick={() => {
          setCount(count + 1)
        }}
      >
        {msg}
      </button>
    </div>
  )
}

export default Button
