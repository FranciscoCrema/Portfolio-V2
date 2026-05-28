import style from "./Footer.module.scss";
import { footer } from "@/content/footer";
import { Form } from "@/components/shared/Form";
import { linkedin, github, mailIcon } from "@/svg/icons";
import { ReactNode } from "react";

// Match each label in the `contacts` array with its corresponding SVG icon
const iconMap: Record<string, ReactNode> = {
  Email: mailIcon,
  LinkedIn: linkedin,
  GitHub: github,
};

export function Footer() {
  return (
    <section className={style.footerContainer} id="contact">
      <div className={style.footerContent}>
        <div className={style.footerData}>
          <div className={style.footerText}>
            <h1 className={style.footerTitle}>{footer.footerData.title}</h1>
            <p className={style.footerDescription}>
              ¿Tenés un proyecto en mente? No dudes en{" "}
              <span className={style.footerHighlight}>contactarte conmigo</span>
              .
            </p>
          </div>
        </div>

        <div className={style.contactItemContainer}>
          {footer.footerData.contacts.map((contact) => (
            <div key={contact.label} className={style.contactItem}>
              {iconMap[contact.label]}
              <div className={style.contactText}>
                <h3 className={style.contactLabel}>{contact.label}</h3>
                <p className={style.contactValue}>{contact.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className={style.footerCopyright}>{footer.footerData.copyright}</p>
    </section>
  );
}
