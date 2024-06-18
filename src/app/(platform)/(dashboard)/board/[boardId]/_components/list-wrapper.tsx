import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ListWrapper = ({ children }: Props) => {
  return (
    <li className="shrink-0 h-full w-[272px] select-none">
      {children}
    </li>
  )
}