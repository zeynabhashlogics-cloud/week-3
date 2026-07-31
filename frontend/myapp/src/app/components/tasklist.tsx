type Task = {
  id: number;
  status: string;
  priority: string;
};

type TaskListProps = {
  tasks: Task[];
};


export default function TaskList({ tasks }: TaskListProps) {

  return (
    <>
      <h1>Tasks</h1>

      {tasks.map((task) => (
        <div key={task.id}>
            <p>id : {task.id}</p>
          <p>Status: {task.status}</p>
          <p>Priority: {task.priority}</p>
          
        </div>
      ))}

    </>
  );
}