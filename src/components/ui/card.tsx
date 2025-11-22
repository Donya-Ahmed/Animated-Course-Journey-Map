import { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`border border-[#E6E6E6] rounded-lg p-4 bg-white ${className}`}>
      {children}
    </div>
  );
};

export default Card;
