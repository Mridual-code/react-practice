import TaskItem from "./TaskItem";

// Accept deleteTask and toggleComplete as props
function TaskList({ tasks, deleteTask, toggleComplete }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks yet. Add one above!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem 
            key={task.id} 
            task={task} 
            deleteTask={deleteTask} 
            toggleComplete={toggleComplete} 
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
