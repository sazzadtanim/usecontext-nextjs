import { createContext, useRef, useState } from "react"
import Component1 from "../components/Component1"


const usernameContext = createContext() //1) create context // 4)export this context for resusibility, but it has to be created in global scope to be exported

export default function Home() {
  const [userName, setUserName] = useState()

  return (
    //2) wrap under provider
    //this value provider provides & consumer will consume it
    // value can be anything (string, function, number ect)
    // value is like the prop we pass in any component
    <usernameContext.Provider value={userName}>
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

