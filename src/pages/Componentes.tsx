import AlertMessage from "../components/AlertMessage/AlertMessage";
import ButtonColorPick from "../components/ButtonColorPick/ButtonColorPick";
import DangerInput from "../components/DangerInput/DangerInput";

const Componentes = () => {
  return (
    <>
    {/* Importamos solo el padre porque desde el accedemos al hijo */}
      <DangerInput/>
      <AlertMessage/>
      <ButtonColorPick/>
    </>
  )
}

export default Componentes