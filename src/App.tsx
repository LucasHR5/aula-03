/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from "./components/Header/Header.tsx";
import { ClipboardText, PlusCircle } from "phosphor-react";
import styles from "./app.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import Task from "./components/Task/Task.tsx";
<<<<<<< HEAD
import { v4 as uuid } from "uuid";

// const data = [
//   {
//     // id: uuidv4(),
//     title: "Tarefa 1",
//     isDeleted: false,
//     isCompleted: false,
//   },
//   {
//     // id: uuidv4(),
//     title: "Tarefa 2",
//     isDeleted: false,
//     isCompleted: true,
//   },
// ];


export default function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([] as any[]);
=======
import { v4 as uuidv4 } from "uuid";

// const data = [
//   {
//     // id: uuidv4(),
//     title: "Tarefa 1",
//     isDeleted: false,
//     isCompleted: false,
//   },
//   {
//     // id: uuidv4(),
//     title: "Tarefa 2",
//     isDeleted: false,
//     isCompleted: false,
//   },
// ];

export default function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([] as any[]); // hook do react
>>>>>>> cb6c50023c0f85da16757e44c9146320a85e0722

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setNewTask(event.target.value);
  };

  const handleCreateTask = (event: FormEvent) => {
    event.preventDefault();

    setTasks((prev) => [
      ...prev,
      {
<<<<<<< HEAD
        id: uuid(),
=======
        id: uuidv4(),
>>>>>>> cb6c50023c0f85da16757e44c9146320a85e0722
        title: newTask,
        isCompleted: false,
        isDeleted: false,
      },
    ]);
  };

  // Função para marcar uma tarefa como concluída

  // Função para remover uma tarefa

  // Lógica para calcular total de tarefas conclídas
  let count = 0;
  // tasks.map((item) => item.isCompleted ? ++count : ""); // ternario com se e senão
  tasks.map((item) => item.isCompleted && ++count);

  let count = 0;
  tasks.map((item) => item.isCompleted ? ++ count: "");
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <form className={styles.newText} onSubmit={handleCreateTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={handleNewTaskChange}
            required
          />
          <button type="submit">
            Criar
            <PlusCircle size={20} />
          </button>
        </form>
        <div>
          <div className={styles.content}>
            <div className={styles.contentHeader}>
              <div>
                <strong>Tarefas criadas</strong>
                <span>{tasks.length}</span>
              </div>

              <div>
                <strong>Concluídas</strong>
<<<<<<< HEAD
                <span>{count} de 10</span>
              </div>
            </div>
            <div className={styles.contentBox}>
              {/* se não tiver task mostrar um ícone de lista vazia*/}

              {tasks.length > 0 ? (
                tasks.map((item)=> <Task title = {item.title}/>)
              ): (
                <p> Lista Vazia </p>
              )}
              {tasks.map((task) => (
                <Task title={task.title} />
              ))}
=======
                <span>
                  {count} de {tasks.length}
                </span>
              </div>
            </div>
            <div className={styles.contentBox}>
              {/* Se não tiver task montrar um icone de lista vazia */}
              {tasks.length > 0 ? (
                tasks.map((item) => <Task key={item.id} title={item.title} />)
              ) : (
                <>
                  <ClipboardText size={56} />
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                  <small>Crie tarefas e organize seus itens a fazer</small>
                </>
              )}
>>>>>>> cb6c50023c0f85da16757e44c9146320a85e0722
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
