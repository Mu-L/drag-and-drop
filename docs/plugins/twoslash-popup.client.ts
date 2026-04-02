export default defineNuxtPlugin(() => {
  if (typeof window === "undefined") return;

  document.addEventListener(
    "mouseenter",
    (e) => {
      const hover = (e.target as Element).closest?.(".twoslash-hover");
      if (!hover) return;

      const popup = hover.querySelector(
        ".twoslash-popup-container",
      ) as HTMLElement | null;
      if (!popup) return;

      // Get the hover element's position for fixed placement
      const rect = hover.getBoundingClientRect();
      popup.style.position = "fixed";
      popup.style.left = `${rect.left}px`;
      popup.style.top = `${rect.bottom + 4}px`;
      popup.style.transform = "none";
      popup.style.zIndex = "100";
    },
    true,
  );
});
