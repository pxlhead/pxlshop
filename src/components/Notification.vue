<template lang="pug">
  .note
    p.note-message {{ message }}
    a.close-btn
</template>

<script>
/* eslint-disable no-console */

export default {
  name: 'notification',
  props: ['message'],
};
</script>

<style lang="scss" scoped>

$color-dark: #252525;
$color-grey: #666;
$color-green: #7BEFB2;
$color-light: #fff;

.note {
  position: fixed;
  bottom: 3rem;
  left: 3rem;
  max-width: 20vw;
	background: rgba(123, 239, 178, 0.6);
	padding: 2rem;
	z-index: 10000;
  opacity: 1;
	color: $color-light;
}
.note-message {
  display: block;
  margin: 0;
}
.close-btn {
  position: absolute;
  top: -2rem;
  right: -2rem;
  background-color: $color-light;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
}
</style>
