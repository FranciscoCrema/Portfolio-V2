import style from "./Work.module.scss";
import { workSection } from "@/content/work";
import { arrow, github } from "@/svg/icons";

export default function Work() {
  return (
    <section className={style.workWrapper}>
      <div className={style.workHeader}>
        <h1 className={style.workTitle}>{workSection.header.title}</h1>
        <p className={style.workDescription}>
          {workSection.header.description}
        </p>
      </div>

      <div className={style.workItemsWrapper}>
        {workSection.items.map((item) => (
          <div className={style.workItem}>
            <div className={style.containerImage}>
              <h3 className={style.workCategory}>{item.category}</h3>
              <div className={style.imageWrapper}>
                <img src={item.image} alt={item.alt} className={style.image} />
              </div>
            </div>

            <div className={style.workItemContent}>
              <div className={style.workItemHeader}>
                <h3 className={style.workSubTitle}>{item.title}</h3>
                <p className={style.workDescription}>{item.description}</p>
              </div>

              <div className={style.workItemInfo}>
                <h3 className={style.workInfo}>{item.info}</h3>
                <p className={style.workMetaRow}>
                  <span>Year</span>
                  <span>{item.year}</span>
                </p>

                <p className={style.workMetaRow}>
                  <span>Role</span>
                  <span>{item.role}</span>
                </p>
              </div>

              <div className={style.buttonWrapper}>
                <button className={style.button}>
                  Ir al repositorio
                  <span className={style.icon}>{arrow}</span>
                </button>
                <button className={style.button}>
                  Ver proyecto
                  <span className={style.icon}>{github}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
