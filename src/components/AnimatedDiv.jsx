import { animated, useSpring } from '@react-spring/web'

export default function AnimatedDiv() {
    const springs = useSpring({
        from: { x: 0 },
        to: { x: 100 },
    });
    
    return (
        <animated.div
            className="w-[80px] h-[80px] bg-primary rounded-[8px]"
            style={{
                ...springs
            }}
        />
    )
}