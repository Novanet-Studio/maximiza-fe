<script setup lang="ts">
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { useOnboardingWizard } from '~/composables/useOnboardingWizard'

const wizard = useOnboardingWizard()

const showContract = ref(false)

const schema = yup.object({
  name: yup.string().required('Requerido'),
  email: yup.string().email('Email inválido').required('Requerido'),
  phone: yup.string().required('Requerido'),
  accept: yup
    .boolean()
    .required('Debes aceptar para poder continuar')
    .isTrue('Debes aceptar para poder continuar'),
})

const { handleSubmit, errors, defineField } = useForm({
  validationSchema: schema,
  initialValues: {
    accept: wizard.state.value.formData.accepted,
    name: wizard.state.value.trackingData?.name ?? '',
    email: wizard.state.value.trackingData?.email ?? '',
    phone: wizard.state.value.trackingData?.phone ?? '',
  },
})

const [accept] = defineField('accept')
const [name] = defineField('name')
const [email] = defineField('email')
const [phone] = defineField('phone')

const validate = handleSubmit((values) => {
  wizard.updateFormData({ accepted: values.accept || false })
  wizard.setTrackingData({
    name: values.name,
    email: values.email,
    phone: values.phone,
  })
  wizard.nextStep()
})

defineExpose({ validate })
</script>

<template>
  <form class="flex flex-col" @submit.prevent>
    <FormTitle
      text="Aceptación del contrato de cuenta de corretaje bursátil por parte del inversor"
    />

    <FormBaseLayout :style="'py-4'">
      <FormBaseInput
        name="name"
        label="Nombre completo"
        v-model="name"
        :error-message="errors.name"
        required
      />
      <FormBaseInput
        name="email"
        label="Correo electrónico"
        type="email"
        v-model="email"
        :error-message="errors.email"
        required
      />
      <FormBaseInput
        name="phone"
        label="Teléfono"
        type="tel"
        v-model="phone"
        :error-message="errors.phone"
        required
      />
    </FormBaseLayout>

    <FormBaseLayout class="mt-4">
      <div class="flex flex-wrap items-center gap-1">
        <FormBaseCheckbox
          name="accept"
          v-model="accept"
          label="Acepto los"
          :error-message="errors.accept"
        />
        <button
          type="button"
          class="text-primary cursor-pointer text-sm font-semibold underline"
          @click="showContract = true"
        >
          términos y condiciones
        </button>
      </div>
    </FormBaseLayout>

    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="showContract"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4"
          @click.self="showContract = false"
        >
          <div
            class="max-h-[80vh] w-full max-w-2xl overflow-y-auto bg-white p-6"
          >
            <div class="mb-4 flex items-center justify-between">
              <h5 class="text-black-alt font-semibold">
                Contrato de cuenta de corretaje bursátil
              </h5>
              <button
                type="button"
                class="text-gray hover:text-black-alt transition-colors"
                @click="showContract = false"
              >
                <font-awesome-icon :icon="['fas', 'times']" />
              </button>
            </div>
            <p
              class="text-gray text-justify text-sm leading-relaxed md:text-base"
            >
              Aceptación del contrato de cuenta de corretaje bursátil por parte
              del inversor con la firma del presente documento, el cliente
              expresamente conviene y acepta que las operaciones financieras y
              bursátiles celebradas entre maximiza y el cliente se regirán por
              el contrato de cuenta corretaje bursátil, del cual el presente
              anexo forma parte integrante, y cual fue autenticado por ante la
              Notaría Pública sexta del Municipio Chacao del estado Miranda, el
              26 de Enero del 2007, bajo el N°56, tomo 10, de los libros de
              autenticación llevados por esa notaría, así mismo, el cliente
              declara haber leído y comprendido las operaciones objeto de los
              contratos que integran la cuenta de corretaje bursátil. De
              conformidad con lo establecido en las normas relativas a la
              administración y fiscalización de los riesgos relacionados con los
              delitos de legitimación de los capitales, financiamiento al
              terrorismo, financiamiento de la proliferación de armas de
              destrucción masiva y otros ilícitos, aplicables a los sujetos
              regulados por la Superintendencia Nacional de Valores, por lo que
              el (los) inversor(es) declara(n) bajo fe de juramento que los
              dineros, capitales y haberes, valores o títulos utilizados en las
              operaciones, no guardan relación con actividades provenientes del
              delito de legitimación de capitales u otros delitos previstos y
              sancionados en la ley orgánica contra la delincuencia organizada y
              financiamiento al terrorismo. Así mismo, el inversor expresamente
              declara que la información suministrada es cierta y completa y que
              refleja con exactitud la realidad legal y financiera del cliente
              y, autoriza suficientemente a Maximiza Casa de Bolsa, C.A., para
              que verifique los datos aportados y que han sido vertidos en esta
              planilla, señalados en la providencia N°025 y las demás
              disposiciones que tutelan esta materia.
            </p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </form>
</template>
