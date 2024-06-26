
import { ButtonBasic,  InputWrapper } from "@/components/molecules";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
        <div>
          <h1>Template Next Atomic</h1>
          <InputWrapper className="containerInputWrapper" inputType="inputSearch" componentProps={{placeholder:'hola en InputSearch'}}/>
          <InputWrapper className="containerInputWrapper" inputType="inputForm" componentProps={{placeholder:'hola en InputForm'}}/>
          <ButtonBasic className={styles.buttonWhiticon} title='Click me'/>
        </div>
    </main>
  );
}
