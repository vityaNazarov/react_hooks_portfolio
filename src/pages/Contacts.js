import linkedIn from '../img/icons/linkedIn.svg';
import instagram from '../img/icons/instagram.svg';
import telegram from '../img/icons/telegram.svg';
import { ClipLoader } from 'react-spinners';
import { useState } from 'react';

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [formData, setFormData] = useState({
    user_message: '',
  });

  const handleFormSubmit = async event => {
    event.preventDefault();

    setLoadingSubmit(true);
    const formData = new FormData(event.target);

    try {
      const response = await fetch(
        'https://api.telegram.org/bot6941870762:AAH1t69wDRCXdDHochxv3lL5C9HLkl0yo8w/sendMessage',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: '-4118417783',
            text: `Новая заявка!\n\nСообщение: ${formData.get('user_message')}`,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Очистить форму
      setFormData({
        user_message: '',
      });

      // Показываем успешное сообщение
      setSuccessMessage(true);

      // Дополнительные действия, если необходимо
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      // После завершения запроса устанавливаем состояние загрузки в false
      setLoadingSubmit(false);
    }
  };

  return (
    <main className="section">
      {/* <div
        className={
          !successMessage ? 'ind-modal-backdrop' : 'ind-modal-backdrop active'
        }
        onClick={() => setSuccessMessage(false)}
      >
        <div
          className="success-block"
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <button
            onClick={() => setSuccessMessage(false)}
            className="success-block-close-btn"
          >
            <svg
              className="success-block-close-svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.6067 6.20659C18.8312 5.98204 18.8312 5.61797 18.6067 5.39342C18.3821 5.16887 18.0181 5.16887 17.7935 5.39342L12.0001 11.1868L6.20668 5.39342C5.98213 5.16887 5.61806 5.16887 5.39351 5.39342C5.16896 5.61797 5.16896 5.98204 5.39351 6.20659L11.1869 12L5.39351 17.7934C5.16896 18.018 5.16896 18.382 5.39351 18.6066C5.61806 18.8311 5.98213 18.8311 6.20668 18.6066L12.0001 12.8132L17.7935 18.6066C18.0181 18.8311 18.3821 18.8311 18.6067 18.6066C18.8312 18.382 18.8312 18.018 18.6067 17.7934L12.8133 12L18.6067 6.20659Z"
                fill="#232427"
              />
            </svg>
          </button>
          <h2 className="success-block-title">{t('Success_block_title')}</h2>
          <p className="success-block-text">{t('Success_block_text')}</p>
          <p className="success-block-text-thanks">
            {t('Success_block_text_thanks')}
          </p>
          <Link href="/" className="success-block-btn">
            {t('Success_block_btn')}
          </Link>
        </div>
      </div> */}

      <div className="container">
        <h1 className="title-1">Contact me</h1>

        <ul className="contact-list">
          <li className="contact-block">
            <img
              className="contact-img"
              src={instagram}
              alt="Link"
              width={40}
              height={40}
            />
            <a
              className="contact-text-link"
              href="https://www.instagram.com/_ulianchuck_/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-text">Instagram</span>
            </a>
          </li>

          <li className="contact-block">
            <img
              className="contact-img"
              src={telegram}
              alt="Link"
              width={40}
              height={40}
            />
            <a
              className="contact-text-link"
              href="https://t.me/jam_varenie"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-text">Telegram</span>
            </a>
          </li>

          <li className="contact-block">
            <img
              className="contact-img"
              src={linkedIn}
              alt="Link"
              width={40}
              height={40}
            />
            <a
              className="contact-text-link"
              href="https://www.linkedin.com/in/viktor-nazarov/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-text">LinkedIn</span>
            </a>
          </li>
        </ul>

        <h1 className="title-1">You can write to me</h1>
        <form className="contact-form" onSubmit={handleFormSubmit}>
          <textarea
            name="user_message"
            value={formData.user_message}
            placeholder="write to me in telegram"
            className="contact-textarea"
            onChange={e =>
              setFormData({
                ...formData,
                user_message: e.target.value,
              })
            }
            required
          ></textarea>

          {successMessage ? (
            <svg
              className="svg-icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              hanging={50}
            >
              <path
                d="M469.333333 640l0.384 0.384L469.333333 640z m-106.282666 0l-0.384 0.384 0.384-0.384z m48.512 106.666667a87.466667 87.466667 0 0 1-61.653334-24.874667l-179.52-173.632a67.797333 67.797333 0 0 1 0-98.24c28.032-27.157333 73.493333-27.157333 101.589334 0l139.584 134.997333 319.168-308.544c28.032-27.157333 73.493333-27.157333 101.589333 0a67.925333 67.925333 0 0 1 0 98.24L472.981333 722.069333A87.530667 87.530667 0 0 1 411.562667 746.666667z"
                fill="#78C326"
              />
            </svg>
          ) : (
            <button
              type="submit"
              className="btn form-btn"
              disabled={loadingSubmit}
            >
              {loadingSubmit ? (
                <ClipLoader color="#232427" size={30} />
              ) : (
                'SEND MESSAGE'
              )}
            </button>
          )}
        </form>
      </div>
    </main>
  );
};

export default Contacts;
