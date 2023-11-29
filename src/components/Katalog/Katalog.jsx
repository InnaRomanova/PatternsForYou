import React from "react";
import "./Katalog.css";
import CardButton from "../Elements/CardButton";
import katalogImage1 from "../../images/katalogImage1.png";
import map from "lodash/map";

function Katalog({ items }) {
  const arrCards = [
    {
      id: 1,
      image: katalogImage1,
      name: "Платья",
      detailed: "Decor / Подробнее",
    },
    {
      id: 2,
      image: katalogImage1,
      name: "Жакеты",
      detailed: "Decor / Подробнее",
    },
    {
      id: 3,
      image: katalogImage1,
      name: "Юбки",
      detailed: "Decor / Подробнее",
    },
    {
      id: 4,
      image: katalogImage1,
      name: "Блузки",
      text: "Decor / Подробнее",
    },
    // {
    //   id: 4,
    //   // image: NewsCard,
    //   name: "Modern Kitchen",
    //   detailed: "женское платье",
    // },
    // {
    //   id: 4,
    //   //  image: NewsCard,
    //   name: "Modern Kitchen",
    //   detailed: "женское платье",
    // },
  ];

  const cards = [];

  arrCards.forEach((card, index) => {
    cards.push(
      <>
        <li className="katalog-card">
          {/* <img
          src={card.image}
          alt="картинка выкройки"
          className="katalog-card"
        /> */}
          <div className="katalog-card__info">
            <div className="katalog-card__info-text">
              <h4 className="katalog-card__name">{cards.name}</h4>
              <p className="katalog-card__detailed">{cards.detailed}</p>
            </div>
            <CardButton />
          </div>
        </li>
      </>
    );
  });

  return (
    <section className="katalog">
      <div className="katalog__container">
        <div className="katalog__text">
          <h2 className="news__title ">Выкройки по категориям</h2>
          <h3 className="katalog__subtitle">Женская одежда</h3>
        </div>
        <ul className="katalog-cards">
          {items.map(() => (
            <arrCards />
            //     <li className="katalog-card">
            //       {cards.image}
            //       {/* <img
            //   src={card.image}
            //   alt="картинка выкройки"
            //   className="katalog-card"
            // /> */}
            //       <div className="katalog-card__info">
            //         <div className="katalog-card__info-text">
            //           <h4 className="katalog-card__name">{cards.name}</h4>
            //           <p className="katalog-card__detailed">{cards.detailed}</p>
            //         </div>
            //         <CardButton />
            //       </div>
            //     </li>
          ))}

          {/* <div className="katalog-card__info">
            <div className="katalog-card__info-text">
              <h4 className="katalog-card__name">Платья</h4>
              <p className="katalog-card__detailed">Decor / Подробнее</p>
            </div>
            <CardButton />
          </div> 
        </div>*/}

          {/* <div className="katalog-card">
          <div className="katalog-card__info">
            <div className="katalog-card__info-text">
              <h4 className="katalog-card__name">Платья</h4>
              <p className="katalog-card__detailed">Decor / Подробнее</p>
            </div>
            <CardButton />
          </div>
        </div>

        <div className="katalog-card">
          <div className="katalog-card__info">
            <div className="katalog-card__info-text">
              <h4 className="katalog-card__name">Платья</h4>
              <p className="katalog-card__detailed">Decor / Подробнее</p>
            </div>
            <CardButton />
          </div>
        </div>

        <div className="katalog-card">
          <div className="katalog-card__info">
            <div className="katalog-card__info-text">
              <h4 className="katalog-card__name">Платья</h4>
              <p className="katalog-card__detailed">Decor / Подробнее</p>
            </div>
            <CardButton />
          </div>*/}
        </ul>
      </div>
    </section>
  );
}

export default Katalog;
