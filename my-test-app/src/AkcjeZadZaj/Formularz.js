import React, { useState } from "react";

export const Formularz = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [task, setTask] = useState([]);
  return (
    <article style={{marginLeft: 30, marginRight: 30}}>
      <h4>Formularz</h4>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (title !== "" && priority !== "") {
            const newTask = {
              id: Math.random(),
              title: title,
              priority: priority,
            };
            setTask((prevTask) => [...prevTask, newTask]);
            setTitle("");
            setPriority("");
          }
        }}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Task title..."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <select
          name=""
          id=""
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value="" hidden>
            Select priority
          </option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      {/* <pre style={{ textAlign: "left" }}>{JSON.stringify(task, null, 2)}</pre> */}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Priority</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {task.map((zad) => {
            return (
              <tr key={zad.id}>
                <td>{zad.id}</td>
                <td>{zad.title}</td>
                <td>{zad.priority}</td>
                <td>
                  <button onClick={()=> {
                    const newTab = task.filter((taskToDelate) => {
                        return taskToDelate.id !== zad.id
                    })
                    setTask(newTab)
                    // console.log(zad)
                  }}>Delate</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </article>
  );
};
