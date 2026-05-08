import style from "./Footer.module.scss";
import { footer } from "@/content/footer";
import { Form } from "@/components/shared/Form";
import { linkedin, github } from "@/svg/icons";

export function Footer() {
  return (
    <section className={style.footerContainer} id="contact">
      <div className={style.footerData}>
        <div className={style.footerText}>
          <h1 className={style.footerTitle}>{footer.footerData.title}</h1>
          <p className={style.footerDescription}>
            {footer.footerData.description}
          </p>
          <div className={style.footerIcons}>
            <button className={style.iconButton}>
              <a href="#">{linkedin}</a>
            </button>
            <button className={style.iconButton}>
              <a href="#">{github}</a>
            </button>
          </div>
        </div>
        <p className={style.footerCopyright}>{footer.footerData.copyright}</p>
      </div>

      <div className={style.footerForm}>
        <Form />
      </div>
    </section>
  );
}
