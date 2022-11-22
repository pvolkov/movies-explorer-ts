import myPhoto from "../../../../images/my-photo.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__content">
        <div className="about-me__description">
          <h3 className="about-me__name-title">Павел Волков</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик, 35 лет</p>
          <p className="about-me__text">
          Родился в городе Ухта, живу в Санкт-Петербурге. В IT я с 2007 года. Начинал с системного администрирования, а в 2011 году окунулся в мир веба.
          Создавал сайты, администрировал сервера. С 2015 года открыл для себя новую сферу работы – разработка электронных курсов. Занимаюсь этим и по сей день.
          На курсе Яндекс.Практикума решил узнать что-то новое и использовать знания в работе.
          </p>
          <ul className="about-me__social">
            <li>
              <a
                href="https://pvolkov.ru"
                rel="noreferrer"
                target="_blank"
                className="about-me__social-link"
              >
                Веб-сайт
              </a>
            </li>
            <li>
              <a
                href="https://github.com/pvolkov"
                rel="noreferrer"
                target="_blank"
                className="about-me__social-link about-me__social-link_last"
                lang="en"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className="about-me__image" src={myPhoto} alt="Павел Волков" />
      </div>
    </section>
  );
}

export default AboutMe;
