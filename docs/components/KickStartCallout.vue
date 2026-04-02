<template>
  <div
    class="group relative mb-8 border border-sky-200/50 dark:border-fuchsia-500/20 bg-sky-50/80 dark:bg-[#0c1f33] rounded-lg p-6 flex items-center gap-6 hover:-translate-y-0.5 cursor-pointer translate-y-0 transition-all hover:shadow-md dark:hover:shadow-fuchsia-900/20"
  >
    <a
      class="absolute inset-0 z-10"
      target="_blank"
      href="https://formkit.com?utm_source=dnd&utm_medium=website&utm_campaign=react-callout"
    />

    <span
      class="absolute top-3 right-3 text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-600 dark:bg-fuchsia-400/10 dark:text-fuchsia-400 border border-sky-500/15 dark:border-fuchsia-400/20"
    >
      New
    </span>

    <div class="flex-shrink-0 text-sky-400/70 dark:text-fuchsia-400/70 w-14 h-14 group-hover:text-sky-500 dark:group-hover:text-fuchsia-300 transition-colors">
      <svg viewBox="-11.5 -10.232 23 20.463" class="w-full h-full">
        <circle r="2.05" fill="currentColor" />
        <g stroke="currentColor" fill="none" stroke-width="1">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    </div>
    <div class="flex-1 min-w-0">
      <h3 class="text-base font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
        FormKit for React
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5 opacity-40">
          <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Zm4.03-.78a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L14.5 2.44V8a.75.75 0 0 1-1.5 0V2.44L10.34 5.78a.75.75 0 0 1-1.06-.06Z" clip-rule="evenodd" />
        </svg>
      </h3>
      <p class="text-sm text-slate-500 dark:text-slate-400 mt-1 text-pretty">
        FormKit is now available for React — inputs, validation, and themes for your React projects.
      </p>
    </div>
  </div>
</template>
