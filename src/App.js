import {useState} from "react";
import {v4 as uuidv4} from "uuid";

function App() {
    const [inputValue, setInputValue] = useState("");
    const [list, setList] = useState([]);

    const onChangeInput = (e) => {
        const value = e.target.value;
        setInputValue(value);
    }

    const onClickAdd = () => {
        const id = uuidv4();
        const obj = {
            id,
            value: inputValue,
        }
        if (obj.id) {
            setList([...list, {...obj}]);
            setInputValue("");
        }
    }

    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <input value={inputValue} onChange={onChangeInput}/>
                <button onClick={onClickAdd} style={{marginLeft: 12}}>등록</button>
            </div>
            <div style={{marginTop: 12}}>
                {list.map((item) => {
                    return (
                        <div key={item.id}>
                            {item.value}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default App;
