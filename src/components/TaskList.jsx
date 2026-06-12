import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleComplete, editTask }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="empty-message">
          No tasks available. Add a task to get started!
        </p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            editTask={editTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;