import styles from "./Boards.module.css";

type Board = {
  id: number;
  title: string;
  tasks: string[];
};

const boards: Board[] = [
  {
    id: 1,
    title: "Frontend",
    tasks: ["React", "TypeScript", "CSS Modules"],
  },
  {
    id: 2,
    title: "Backend",
    tasks: ["Node.js", "Express", "REST API"],
  },
  {
    id: 3,
    title: "Учеба",
    tasks: ["ВКР", "Практика", "GitHub"],
  },
];

function Boards() {
  return (
    <main className={styles.boardsPage}>
      <h1>Доски задач</h1>
      <p>Страница открывается после успешной регистрации.</p>

      <div className={styles.boardsGrid}>
        {boards.map((board) => (
          <section className={styles.board} key={board.id}>
            <h2>{board.title}</h2>

            <ul>
              {board.tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}

export default Boards;
