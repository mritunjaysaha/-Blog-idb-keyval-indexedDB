import React, { useState } from "react";
import { set, get } from "idb-keyval";
function App() {
    const [data, setData] = useState("");
    const [value, setValue] = useState("");
    function handleData(e) {
        e.preventDefault();
        setData(e.target.value);
    }

    function updateIndexedDB() {
        set("name", data);
    }

    function getData() {
        get("name").then((val) => setValue(val));
    }
    return (
        <div className="App">
            <div>
                <input placeholder="send data" onChange={handleData} />
                <button onClick={updateIndexedDB}>Send</button>
            </div>
            <div>
                <p>{value != "" ? value : null}</p>
                <button onClick={getData}>Get</button>
            </div>
        </div>
    );
}

export default App;
