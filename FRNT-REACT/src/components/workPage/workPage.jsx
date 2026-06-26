import "./workPage.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import work1 from "../../assets/3dfigures.png";
import work2 from "../../assets/peppe-bird.png";
import work3 from "../../assets/pskovWeld.png";

function WorksPage() {
  const works = [
    {
      id: 1,
      title: "DDDfigures.ru",
      description: "Сайт для продажи 3Д фигурок",
      image: work1,
    },
    {
      id: 2,
      title: "Peppa Bird",
      description: "Простая браузерная игра по мотивам Flappy Bird",
      image: work2,
    },
    {
      id: 3,
      title: "PskovWeld",
      description:
        "Сайт компании металлообработки",
      image: work3,
    },
  ];

  return (
    <main className="works-page">
      <h1>Мои работы</h1>
      <p className="works-page-text">Примеры выполненных работ</p>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="works-slider"
      >
        {works.map((work) => (
          <SwiperSlide key={work.id}>
            <div className="work-slide">
              <img src={work.image} alt={work.title} />

              <div className="work-slide-info">
                <h2>{work.title}</h2>
                <p>{work.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}

export default WorksPage;
