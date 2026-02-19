import {FireButton} from "./AnimatedButton.jsx";


export function ContextButton({ children, onClick, index, setHoveredIndex, className="" }) {
    return (
        <FireButton
            onClick={onClick}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={className}
        >
            {children}
        </FireButton>
    );
}