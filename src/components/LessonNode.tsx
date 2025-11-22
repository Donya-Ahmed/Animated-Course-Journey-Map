import React from "react";
import Image from "next/image";

type LessonNodeProps = {
  title: string;
  status: "done" | "active" | "disabled";
  onClick?: () => void;
};

export default function LessonNode({
  title,
  status,
  onClick,
}: LessonNodeProps) {
  const statusImages: Record<typeof status, string> = {
    done: "/done.png",
    active: "/active.png",
    disabled: "/disabled.png",
  };

  return (
    <div className="flex flex-col items-center gap-2" onClick={onClick}>
      <Image
        src={statusImages[status]}
        alt={`${title} - ${status}`}
        width={80}
        height={80}
        className={`${
          status === "disabled"
            ? "opacity-50"
            : status === "active"
            ? " bounceAnimation"
            : "HoverDoneEffect"
        } cursor-pointer`}
        style={{
          objectFit: "contain",
          width: "55px",
          height: "auto",
          zIndex: 10,
        }}
      />
      <p
        className={`${
          status === "disabled"
            ? "text-muted-foreground"
            : status === "active"
            ? "text-active text-animation-active"
            : "text-completed text-animation-complete"
        } text-sm font-semibold`}
      >
        {title}
      </p>
    </div>
  );
}
