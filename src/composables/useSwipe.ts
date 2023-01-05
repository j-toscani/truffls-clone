import { onMounted, ref, onUnmounted } from "vue";

interface SwipeOptions {
  reactionTime?: number;
  threshold?: number;
}

export default function useSwipe(
  onSwipeLeft: () => void,
  onSwipeRight: () => void,
  options: SwipeOptions = {}
) {
  const { reactionTime = 300, threshold = 100 } = options;

  const from = ref(0);
  const to = ref(0);
  const willSwipe = ref(false);
  const timeout = ref<null | NodeJS.Timeout>(null);

  onMounted(() => {
    document.body.addEventListener("pointerup", handlePointerUp);
  });

  onUnmounted(() => {
    document.body.removeEventListener("pointerup", handlePointerUp);
    if (timeout.value) {
      clearTimeout(timeout.value);
    }
  });

  function handlePointerUp(event: PointerEvent) {
    to.value = event.clientX;
    const distance = from.value - to.value;

    if (!willSwipe.value) {
      return;
    }

    if (distance >= threshold) {
      onSwipeLeft();
    }

    if (distance <= -1 * threshold) {
      onSwipeRight();
    }

    willSwipe.value = false;
  }

  function handlePointerDown(event: PointerEvent) {
    from.value = event.clientX;
    to.value = event.clientX;

    willSwipe.value = true;

    timeout.value = setTimeout(() => (willSwipe.value = false), reactionTime);
  }

  return { handlePointerDown, willSwipe };
}
