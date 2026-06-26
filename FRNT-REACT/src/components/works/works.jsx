import "./works.css";
import peppaBird from "../../assets/peppe-bird.png";
import dddfigures from "../../assets/3dfigures.png";
import pskovWeld from "../../assets/pskovWeld.png";
function Works() {
  const projects = [
    {
      id: 1,
      title: "Peppa Bird",
      description: "Учебный проект с игровой тематикой",
      image: peppaBird,
    },
    {
      id: 2,
      title: "3D figures Shop",
      description: "Проект магазина 3Д фигурок",
      image: dddfigures,
    },
    {
      id: 3,
      title: "PskoWeld Sait",
      description: "Полноценный сайт для производственной компании",
      image: pskovWeld,
    },
  ];

  return (
    <section className="works" id="works">
      <h2>Мои работы</h2>

      <div className="works-list">
        {projects.map((project) => (
          <div key={project.id} className="work-card">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                onError={() => console.log("Ошибка картинки:", project.image)}
              />
            )}

            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Works;
