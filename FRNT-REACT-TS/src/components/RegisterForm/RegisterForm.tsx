import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import "./RegisterForm.css";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  function onSubmit(data: FormValues) {
    console.log("Данные формы:", data);
    alert("Регистрация успешно выполнена!");
  }

  return (
    <motion.section
      className="registration"
      id="registration"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="registration-card">
        <div>
          <span className="section-label">React Hook Form</span>
          <h2>Регистрация</h2>
          <p>
            Форма содержит три поля: имя, email и пароль. Для каждого поля
            настроена простая валидация.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Имя
            <input
              type="text"
              placeholder="Введите имя"
              {...register("name", {
                required: "Имя обязательно для заполнения",
              })}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </label>

          <label>
            Email
            <input
              type="email"
              placeholder="example@mail.ru"
              {...register("email", {
                required: "Email обязателен для заполнения",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Введите корректный email",
                },
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </label>

          <label>
            Пароль
            <input
              type="password"
              placeholder="Минимум 6 символов"
              {...register("password", {
                required: "Пароль обязателен для заполнения",
                minLength: {
                  value: 6,
                  message: "Пароль должен быть не короче 6 символов",
                },
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </label>

          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </motion.section>
  );
}

export default RegisterForm;
