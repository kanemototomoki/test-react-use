import { useRef } from "react";
import { useHoverDirty } from "react-use";

type Props = {
  children: React.ReactNode;
};

export const Hover = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isHover = useHoverDirty(ref);

  return (
    <div
      ref={ref}
      style={{
        padding: "10px 30px",
        border: "1px solid black",
        backgroundColor: isHover ? "red" : "blue",
        color: "white",
      }}
    >
      {children}
    </div>
  );
};

Hover.displayName = "Hover";
