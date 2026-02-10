<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
import { usePlanillaWizard } from "~/composables/usePlanillaWizard";

const wizard = usePlanillaWizard();
const type = wizard.state.value.type;

const schema = yup.object({
  accept: yup
    .boolean()
    .required("Debes aceptar para poder continuar")
    .isTrue("Debes aceptar para poder continuar"),
});

const { handleSubmit, errors, defineField } = useForm({
  validationSchema: schema,
  initialValues: {
    accept: wizard.state.value.formData.accepted,
  },
});

const [accept, acceptProps] = defineField("accept");

const validate = handleSubmit((values) => {
  wizard.updateFormData({ accepted: values.accept || false });

  wizard.nextStep();
});

defineExpose({
  validate,
});
</script>

<template>
  <form class="flex flex-col gap-6" @submit.prevent>
    <FormTitle
      text="Aceptación del contrato de cuenta de corretaje bursátil por parte del inversor"
    />

    <p
      class="text-maximiza-gris1 text-sm md:text-base leading-relaxed text-justify mb-6"
    >
      Aceptación del contrato de cuenta de corretaje bursátil por parte del
      inversor con la firma del presente documento, el cliente expresamente
      conviene y acepta que las operaciones financieras y bursátiles celebradas
      entre maximiza y el cliente se regirán por el contrato de cuenta corretaje
      bursátil, del cual el presente anexo forma parte integrante, y cual fue
      autenticado por ante la Notaría Pública sexta del Municipio Chacao del
      estado Miranda, el 26 de Enero del 2007, bajo el N°56, tomo 10, de los
      libros de autenticación llevados por esa notaría, así mismo, el cliente
      declara haber leído y comprendido las operaciones objeto de los contratos
      que integran la cuenta de corretaje bursátil. De conformidad con lo
      establecido en las normas relativas a la administración y fiscalización de
      los riesgos relacionados con los delitos de legitimación de los capitales,
      financiamiento al terrorismo, financiamiento de la proliferación de armas
      de destrucción masiva y otros ilícitos, aplicables a los sujetos regulados
      por la Superintendencia Nacional de Valores, por lo que el (los)
      inversor(es) declara(n) bajo fe de juramento que los dineros, capitales y
      haberes, valores o títulos utilizados en las operaciones, no guardan
      relación con actividades provenientes del delito de legitimación de
      capitales u otros delitos previstos y sancionados en la ley orgánica
      contra la delincuencia organizada y financiamiento al terrorismo. Así
      mismo, el inversor expresamente declara que la información suministrada es
      cierta y completa y que refleja con exactitud la realidad legal y
      financiera del cliente y, autoriza suficientemente a Maximiza Casa de
      Bolsa, C.A., para que verifique los datos aportados y que han sido
      vertidos en esta planilla, señalados en la providencia N°025 y las demás
      disposiciones que tutelan esta materia
    </p>

    <FormBaseLayout>
      <FormBaseCheckbox
        name="accept"
        v-model="accept"
        label="Acepto los términos y condiciones"
        :error-message="errors.accept"
      />
    </FormBaseLayout>
  </form>
</template>
