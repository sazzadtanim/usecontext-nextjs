import { createContext, useRef, useState } from "react"
import Component1 from "../components/Component1"

// todo: reverse dataTransfer from child to parent // useful for notification 

const usernameContext = createContext()

export default function Home() {
  const [userName, setUserName] = useState()

  return (
    <usernameContext.Provider value={(cb) => setUserName(cb)}>
      <div className="border border-red-500 bg-red-300">
        <h1>This is the main component</h1>
        <h1>My username is :
          <input placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </h1>
        <Component1 />

      </div >
    </usernameContext.Provider>
  )
}

export { usernameContext }

