import "./Modal.css";

function Modal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h2>Обратная связь</h2>

        <form>
          <input type="text" placeholder="Ваше имя" />

          <input type="email" placeholder="Ваш email" />

          <textarea placeholder="Сообщение"></textarea>

          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
