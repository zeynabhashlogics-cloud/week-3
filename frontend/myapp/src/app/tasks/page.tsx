import TaskList from "../components/tasklist";

type Task = {
  id: number;
  title: string;
  status: string;
  priority: string;
};


export default async function TasksPage() {

  const response = await fetch(
    "http://localhost:3002/tasks",
  
  );


  if (!response.ok) {

    return (
      <>
        <h1>Error</h1>
        <p>Failed to load tasks</p>
      </>
    );

  } 
  else {

    const tasks: Task[] = await response.json();

    return (
      <TaskList tasks={tasks} />
    );

  }

}