<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
import { usePlanillaWizard } from "~/composables/usePlanillaWizard";

const wizard = usePlanillaWizard();

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
  wizard.updateFormData({ accepted: values.accept || false});
  
  wizard.nextStep();
});

defineExpose({
  validate,
});
</script>

<template>
  <form class="flex flex-col" @submit.prevent>
    <FormTitle
      text="Aceptación del contrato de cuenta de corretaje bursátil por parte del inversor"
    />

    <p
      class="text-maximiza-gris1 text-sm md:text-base leading-relaxed text-justify mb-6"
    >
      Con la firma del presente documento, el cliente expresamente conviene y
      acepta que las operaciones financieras y bursátiles celebradas entre
      Maximiza y el cliente se regirán por el contrato de cuenta corretaje
      bursátil, del cual el presente anexo forma parte integrante, y el cual fue
      autenticado por ante la notaria pública sexta del municipio chacao del
      estado miranda, el 26 de enero del 2007, bajo el n°56, tomo 10, de los
      libros de autenticación llevados por esa notaria, así mismo, el cliente
      declara haber leído y comprendido las operaciones objeto de los contratos
      que integran la cuenta de corretaje bursátil. De conformidad con lo
      establecido en el artículo n°41 de la providencia n° 074 publicada en
      gaceta oficial n° 41,788 de fecha 26 de junio de 2019, emanada por la
      superintendencia nacional de valores, el (los) inversor (es) declara (n)
      bajo fe de juramento que los dineros, capitales y haberes, valores o
      títulos utilizados en las operaciones, no guardan relación con actividades
      provenientes del delito legitimación de capitales u otros delitos
      previstos y sancionados en la ley orgánica juramento que los dineros,
      capitales y haberes valores o títulos utilizados en las operaciones, no
      guardan relación con actividades provenientes del delito legitimación
      capitales u otros delitos previstos y sancionados en la ley orgánica
      autoriza suficientemente a <b>Maximiza casa de bolsa C.A.</b>, Para que
      verifique los datos aportados y que han sido vertidos en esta planilla, en
      cumplimiento a lo establecido en la normativa antes mencionada.
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
