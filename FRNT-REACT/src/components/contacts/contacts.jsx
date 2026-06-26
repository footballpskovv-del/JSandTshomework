import "./contacts.css";

function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts-card">
        <div>
          <span className="contacts-label">Связь</span>
          <h2>Контакты</h2>
          <p>
            Готов обсудить учебные проекты, веб-разработку и сотрудничество.
          </p>
        </div>

        <div className="contacts-list">
          <a href="mailto:example@mail.ru">example@mail.ru</a>
          <a href="https://t.me/username" target="_blank">
            Telegram
          </a>
          <a href="https://github.com/username" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
