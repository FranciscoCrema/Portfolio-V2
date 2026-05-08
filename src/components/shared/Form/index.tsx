import React from "react";
import style from "./Form.module.scss";
import { footer } from "@/content/footer";

export function Form() {
  return (
    <>
      <div className={style.formContainer}>
        <input type="text" placeholder={footer.footerForm.placeholderName} />
        <input type="email" placeholder={footer.footerForm.placeholderEmail} />
        <input type="text" placeholder={footer.footerForm.placeholderSubject} />
        <textarea placeholder={footer.footerForm.placeholderMessage}></textarea>
      </div>
      <button className={style.contactButton}>
        <a href="#">Contacto</a>
      </button>
    </>
  );
}
