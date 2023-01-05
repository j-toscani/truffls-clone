import { onMounted, ref, onUnmounted } from "vue";

interface SwipeOptions {
  reactionTime?: number;
  threshold?: number;
}

type MixedEvent = MouseEvent | TouchEvent;

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
    document.body.addEventListener("mouseup", handlePointerUp);
    document.body.addEventListener("touchend", handlePointerUp);
  });

  onUnmounted(() => {
    document.body.removeEventListener("mouseup", handlePointerUp);
    document.body.removeEventListener("touchend", handlePointerUp);

    if (timeout.value) {
      clearTimeout(timeout.value);
    }
  });

  function handlePointerUp(mixedEvent: MixedEvent) {
    to.value = getEvent(mixedEvent).clientX;
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

  function handlePointerDown(mixedEvent: MixedEvent) {
    from.value = getEvent(mixedEvent).clientX;
    to.value = getEvent(mixedEvent).clientX;

    willSwipe.value = true;

    timeout.value = setTimeout(() => (willSwipe.value = false), reactionTime);
  }

  function getEvent(event: MixedEvent) {
    return "changedTouches" in event ? event.changedTouches[0] : event;
  }

  return { handlePointerDown, willSwipe };
}
