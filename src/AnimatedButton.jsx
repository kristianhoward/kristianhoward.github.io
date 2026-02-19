import {ContextButton} from "./ContextButton.jsx";

export function FireButton({ children, icon, onClick, className = "" }) {
    return (
        <button
            onClick={onClick}
            className={`
        relative
        overflow-hidden
        group
        transition-all duration-300
        hover:shadow-[0_0_25px_rgba(255,120,0,0.6)]
        focus:outline-none
        focus:ring-0
        ${className}
        `}>
            {/* Fire layer (animated) */}
            <span className="
      absolute inset-0
      opacity-0
      group-hover:opacity-100
      transition-opacity duration-200
      bg-[radial-gradient(circle_at_50%_120%,rgba(237,61,38,0.8),transparent_60%),radial-gradient(circle_at_40%_140%,rgba(255,200,0,0.7),transparent_60%),radial-gradient(circle_at_60%_160%,rgba(255,60,0,0.7),transparent_70%)]
      bg-[length:120%_200%]
      group-hover:animate-fireFlow
      blur-md
      pointer-events-none
    "/>
            <span className="
    absolute inset-0
    opacity-0
    group-hover:opacity-100
    transition-opacity duration-200
    bg-[radial-gradient(circle_at_50%_120%,rgba(237,61,38,0.5),transparent_60%)]
    bg-[length:120%_200%]
    group-hover:animate-fireFlowSlow
    blur-lg
    pointer-events-none
  "/>
            {/* Text layer (sharp) */}
            {icon && (
                <img className="w-6 h-6 inline" src={`${icon}`}  alt=""/>
            )}
            <span className="relative z-10">{children}</span>
        </button>
    );
}

export function ContextFireButton({ children, icon, onClick, index, setHoveredIndex, className = "" }) {
    return (
        <ContextButton
            onClick={onClick}
            index={index}
            setHoveredIndex={setHoveredIndex}
            className={`
        relative
        overflow-hidden
        group
        transition-all duration-300
        hover:shadow-[0_0_25px_rgba(255,120,0,0.6)]
        focus:outline-none
        focus:ring-0
        ${className}
        `}>
            {/* Fire layer (animated) */}
            <span className="
      absolute inset-0
      opacity-0
      group-hover:opacity-100
      transition-opacity duration-200
      bg-[radial-gradient(circle_at_50%_120%,rgba(237,61,38,0.8),transparent_60%),radial-gradient(circle_at_40%_140%,rgba(255,200,0,0.7),transparent_60%),radial-gradient(circle_at_60%_160%,rgba(255,60,0,0.7),transparent_70%)]
      bg-[length:120%_200%]
      group-hover:animate-fireFlow
      blur-md
      pointer-events-none
    "/>
            <span className="
    absolute inset-0
    opacity-0
    group-hover:opacity-100
    transition-opacity duration-200
    bg-[radial-gradient(circle_at_50%_120%,rgba(237,61,38,0.5),transparent_60%)]
    bg-[length:120%_200%]
    group-hover:animate-fireFlowSlow
    blur-lg
    pointer-events-none
  "/>

            {/* Text layer (sharp) */}
            {icon && (
                <img className="w-6 h-6 inline" src={`${icon}`}  alt=""/>
            )}
            <span className="relative z-10"> {children}</span>
        </ContextButton>
    );
}