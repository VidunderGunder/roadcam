import {
  useState,
  useRef,
  useEffect,
  useCallback,
  useLayoutEffect,
} from 'react';
import { throttle } from 'throttle-debounce';

/**
 * Hover hook based on [the only reliableish way I've found to fire mouseleave-event](https://github.com/mjsarfatti/use-mouse-leave/), but flipped to return hover instead of mouseLeft.
 */
export default function useHover() {
  const [mouseLeft, setMouseLeft] = useState(true);
  const elementRef = useRef<HTMLElement | null>(null);

  // Check whether the pointer is still within our element, every ...ms
  const handleMouseMove = useRef(
    throttle(50, (e: MouseEvent) => {
      if (!elementRef || !elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();

      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        setMouseLeft(true);
      } else {
        setMouseLeft(false);
      }
    })
  ).current;

  // Start tracking the pointer when it enters our element
  const handleMouseEnter = useRef(() => {
    window.addEventListener('mousemove', handleMouseMove);
  }).current;

  // See https://medium.com/@teh_builder/ref-objects-inside-useeffect-hooks-eb7c15198780
  // Dynamic ref because the element may be null at times
  const hoverRef = useCallback(
    (node: HTMLElement | null) => {
      // Make sure to cleanup any events/references added to the last instance
      if (elementRef && elementRef.current) {
        elementRef.current.removeEventListener('mouseenter', handleMouseEnter);
      }

      if (node !== null) {
        node.addEventListener('mouseenter', handleMouseEnter);

        // Save a reference to the node
        elementRef.current = node;
      }
    },
    [handleMouseEnter]
  );

  useEffect(() => {
    // Cleanup events on component unmount
    return () => {
      if (elementRef && elementRef.current) {
        elementRef.current.removeEventListener('mouseenter', handleMouseEnter);
      }
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseEnter, handleMouseMove]);

  // MODIFIED BELOW
  // For some reason it seems like useLayoutEffect is more reliable than useEffect,
  // as useEffect sometimes fails, while using useLayoutEffect makes it work 100%
  // of the time during manual testing

  useLayoutEffect(() => {
    if (mouseLeft) {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseLeft, handleMouseMove]);

  // Return hover instead of mouseLeft
  const hover = !mouseLeft;
  return [hoverRef, hover] as const;
}
