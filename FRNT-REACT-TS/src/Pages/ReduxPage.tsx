import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loginUser, logout, registerUser } from "../features/auth/authSlice";
import { fetchTodos } from "../features/todos/todosSlice";
import styles from "./ReduxPage.module.css";

function ReduxPage() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const todos = useAppSelector((state) => state.todos);

  const [name, setName] = useState("emilys");
  const [email, setEmail] = useState("emily@example.com");
  const [password, setPassword] = useState("emilyspass");

  function handleRegister() {
    dispatch(
      registerUser({
        name,
        email,
        password,
      }),
    );
  }

  function handleLogin() {
    dispatch(
      loginUser({
        username: name,
        password,
      }),
    );
  }

  function handleLoadTodos() {
    dispatch(fetchTodos());
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <h1>Redux </h1>
        <p>
          Регистрация, авторизация, сохранение токена в localStorage и загрузка
          списка дел
        </p>

        <div className={styles.form}>
          <input
            type="text"
            placeholder="Имя пользователя"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <div className={styles.buttons}>
            <button onClick={handleRegister}>Регистрация</button>
            <button onClick={handleLogin}>Войти</button>
            <button onClick={handleLoadTodos}>Загрузить дела</button>
            <button onClick={() => dispatch(logout())}>Выйти</button>
          </div>
        </div>

        {auth.loading && <p>Загрузка пользователя...</p>}
        {auth.error && <p className={styles.error}>{auth.error}</p>}

        <div className={styles.userBox}>
          <h2>Пользователь</h2>
          <p>ID: {auth.user.id || "нет"}</p>
          <p>Имя: {auth.user.name || "нет"}</p>
          <p>Email: {auth.user.email || "нет"}</p>
          <p>Авторизован: {auth.user.isAuth ? "да" : "нет"}</p>
          <p>Токен в localStorage: {auth.token ? "есть" : "нет"}</p>
        </div>

        <div className={styles.todos}>
          <h2>Список дел</h2>

          {todos.loading && <p>Загрузка дел...</p>}
          {todos.error && <p className={styles.error}>{todos.error}</p>}

          <ul>
            {todos.items.map((todo) => (
              <li key={todo.id}>
                <span>{todo.todo}</span>
                <strong>{todo.completed ? "готово" : "не готово"}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default ReduxPage;
