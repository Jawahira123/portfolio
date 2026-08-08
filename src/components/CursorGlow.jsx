import { useEffect, useState } from "react";
import "../css/cursor.css";

function CursorGlow() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hover, setHover] = useState(false);

    useEffect(() => {

        const moveCursor = (e) => {
            setPosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const interactiveElements = document.querySelectorAll(
            "a, button, input, textarea, .project-card, .stat-card, .cert-card"
        );

        const handleEnter = () => setHover(true);
        const handleLeave = () => setHover(false);

        window.addEventListener("mousemove", moveCursor);

        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleEnter);
            el.addEventListener("mouseleave", handleLeave);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);

            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleEnter);
                el.removeEventListener("mouseleave", handleLeave);
            });
        };

    }, []);

    return (
        <div
            className={`cursor-ring ${hover ? "cursor-grow" : ""}`}
            style={{
                left: position.x,
                top: position.y
            }}
        />
    );
}

export default CursorGlow;