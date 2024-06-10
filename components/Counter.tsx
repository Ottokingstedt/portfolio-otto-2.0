import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

interface CounterProps {
    value: number;
    duration: number;
    direction?: "up" | "down";
}

const Counter = ({ value, duration, direction = "up" }: CounterProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === "down" ? value : 0);
    const springValue = useSpring(motionValue, {
        damping: 100,
        stiffness: 100,
        duration,
    });

    useEffect(() => {
        motionValue.set(direction === "down" ? 0 : value);
    }, [motionValue, value]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat("en-US").format(
                    latest.toFixed(0)
                );
            }
        });
    }, [springValue]);

    return <span className=" text-xl" ref={ref}></span>;
};

export default Counter;
