import React, { useState } from "react";

export default function ToDoListComponent() {
    const [check,setCheck] = useState([false,""])
  const [todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("todolist")) || []
  );
  const [inputValue,setInputValue] = useState("nhap");
const handleChange = (e)=>{
    setInputValue(e.target.value)
}
  const handleSumbit = (e) => {
    e.preventDefault();
    if(check[0]){
        const newData = [...todolist];
        newData.splice(newData.indexOf(check[1]),1,e.target.text.value);
        setTodolist(newData);
        setCheck([false,""])
    }
    else{
    console.log(e.target.text.value);
    setTodolist([...todolist, e.target.text.value]);}
    localStorage.setItem("todolist", JSON.stringify(todolist));
  };
  const [count,setCount] = useState(0)

  const handleCheck = (e)=>
    {if(e.target.checked){
        setCount(count+1)}else{
            setCount(count-1)
        }
    }
    const handleDelete = (name)=>{
     
      const newData = [...todolist];
      newData.splice(newData.indexOf(name),1);
      setTodolist(newData);
      localStorage.setItem("todolist", JSON.stringify(todolist));
    }
    const handleEdit = (name)=>{
       setCheck([true,name]);
       setInputValue(name)
    }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <form onSubmit={handleSumbit}>
          <fieldset>
            <legend>TO DO LIST</legend>
            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">
                da hoan thanh ({count}/{todolist.length})
              </label>
              <input name="text" type="text" id="disabledTextInput" onChange={handleChange} value={inputValue} class="form-control" />
            </div>
            <button class="btn btn-primary">
              {check[0]?"update":"add"}
            </button>
          </fieldset>
        </form>
        <div>
          <table class="table table-striped">
            <thead>
              <tr>
                <td>check</td>
                <td>name</td>
                <td>action</td>
              </tr>
            </thead>
            <tbody>
              {todolist.map((todo) => {
                return (
                  <tr>
                    <td colSpan={2}>
                      <input type="checkbox" onChange={handleCheck} />
                      {todo}
                    </td>
                    <td><i class='bx bxs-edit-alt' onClick={()=>handleEdit(todo)}></i> | <i onClick={()=>handleDelete(todo)} class='bx bxs-trash' ></i></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
