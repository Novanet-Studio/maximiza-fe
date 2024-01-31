export default function DatosInstitucionStep() {
  return (
    <form>
      <div>
        <div>
          <input type="text" placeholder="Lugar" />
          <input type="text" placeholder="Fechas de elaboración" />
          <input type="text" placeholder="N° o código del inversionista" />
        </div>

        <h4>Datos de la institución del sector valores</h4>
        <div>
          <input type="text" placeholder="Nombre de casa de bolsa o sociedades de corretaje de valores" />
          <input type="text" placeholder="Registro información fiscal" />
          <input type="text" placeholder="Dirección" />
        </div>
      </div>
    </form>
  );
}
