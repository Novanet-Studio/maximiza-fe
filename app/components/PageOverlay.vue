<script setup>
const status = ref("idle");

const startTransition = () => {
  status.value = "in";
};

const finishTransition = () => {
  status.value = "out";
};

defineExpose({
  startTransition,
  finishTransition,
});
</script>

<template>
  <div
    class="fixed top-0 w-full h-screen bg-maximiza z-[9999] pointer-events-none"
    :class="{
      'left-[-100%]': status === 'idle',
      'animate-overlay-in': status === 'in',
      'animate-overlay-out': status === 'out',
    }"
    @animationend="status === 'in' ? null : (status = 'idle')"
  ></div>
</template>
