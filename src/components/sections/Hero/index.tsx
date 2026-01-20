import style from "./Hero.module.scss";
import { hero } from "@/content/hero";
import { linkedin, github } from "@/svg/icons";

export default function Hero() {
  return (
    <section className={style.heroWrapper}>
      <div className={style.heroContent}>
        <div className={style.texts}>
          <h1>{hero.title}</h1>
          <p>{hero.subtitle}</p>

          <div className={style.buttons}>
            <button>
              <a href="">Contacto</a>
            </button>
            <button>
              <a href="#">{linkedin}</a>
            </button>
            <button>
              <a href="#">{github}</a>
            </button>
          </div>
        </div>

        <div className={style.imageContainer}>
          <img src={hero.image} alt="Hero Image" className={style.image} />
        </div>
      </div>
    </section>
  );
}
