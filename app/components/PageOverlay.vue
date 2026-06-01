<script setup>
  const status = ref('idle')

  const startTransition = () => {
    status.value = 'in'
  }

  const finishTransition = () => {
    status.value = 'out'
  }

  defineExpose({
    startTransition,
    finishTransition,
  })
</script>

<template>
  <div
    class="bg-maximiza pointer-events-none fixed top-0 z-[9999] h-screen w-full"
    :class="{
      'left-[-100%]': status === 'idle',
      'animate-overlay-in': status === 'in',
      'animate-overlay-out': status === 'out',
    }"
    @animationend="status === 'in' ? null : (status = 'idle')"
  ></div>
</template>
