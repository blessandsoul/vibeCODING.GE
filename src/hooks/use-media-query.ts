
import { useCallback, useSyncExternalStore } from "react";

export function useMediaQuery(query: string) {
    const subscribe = useCallback(
        (onStoreChange: () => void) => {
            const result = matchMedia(query);
            result.addEventListener("change", onStoreChange);
            return () => result.removeEventListener("change", onStoreChange);
        },
        [query],
    );

    const getSnapshot = useCallback(() => matchMedia(query).matches, [query]);

    // Server (and the first client render) has no matchMedia; default to false
    // to match the previous useState(false) initial value and avoid a hydration
    // mismatch.
    const getServerSnapshot = () => false;

    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
