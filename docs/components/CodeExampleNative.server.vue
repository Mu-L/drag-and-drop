<script lang="ts" setup>
import { highlightCode } from "~/utils/shiki";

const props = defineProps({
  example: String,
  fullHeight: {
    type: Boolean,
    default: false,
    required: false,
  },
});
const res = await import(
  `../examples/${props.example}/${props.example}.ts?raw`
);
const code = res.default;
const { html, darkHtml } = await highlightCode(code, "ts");
</script>

<template>
  <div :data-full-height="fullHeight">
    <div v-html="html" class="dark:hidden"></div>
    <div v-html="darkHtml" class="hidden dark:block"></div>
    <div
      :id="`raw-code-container-${props.example}-native`"
      style="display: none"
    >
      <pre>{{ code }}</pre>
    </div>
  </div>
</template>
