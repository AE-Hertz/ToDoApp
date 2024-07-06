import react, {useState} from "react"
import favicon from "/src/assets/favicon.svg"

function ToDoList() {

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask() {
        if(newTask.trim() !== ""){
            setTask(t => [...t , newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTask = task.filter((_ , i) => i !== index);
        setTask(updatedTask);
    }

    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index -1], updatedTask[index]];
            setTask(updatedTask);
        }
    }

    function moveTaskDown(index) {
        if(index < task.length - 1) {
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
            setTask(updatedTask);
        }
    }

    function openGithub(event) {
        event.preventDefault();

        window.open('https://github.com/AE-Hertz' , '_blank') ;
    }

    return(<>
        <div>
        <header>
        <figure>
            <img onClick={openGithub} src={favicon}  />
        </figure>
        <nav>
            <ul>
                <p>I</p>
                <p>Am</p>
                <p>Hertz</p>
                <p> | </p>
                <p>Abhinandan</p>
            </ul>
        </nav>
        </header>
        </div>
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input type="text"
                placeholder="Enter a Task..."
                value={newTask}
                onChange={handleInputChange}/>
                
                <button className="add-button"
                onClick={addTask}>
                    ADD
                </button>
            </div>

            <ol>
                {task.map((task, index)=> 
                                            <li key={index}>
                                                <span className="text">{task}</span>
                                                <button className="delete-button" onClick={ ()=> deleteTask(index)}>Delete</button>
                                                <button className="move-button" onClick={ ()=> moveTaskUp(index)}>👆</button>
                                                <button className="move-button" id="m" onClick={ ()=> moveTaskDown(index)}>👇</button>
                                            </li>
                )}
            </ol>
        </div>
        </>
    );
}

export default ToDoList