import { ReactNode } from 'react';
import { KnowContainer } from './styles';

interface KnowProps {
  title: string;
  icon: ReactNode;
}

export default function KnowItem({ title, icon }: KnowProps) {
  return (
    <KnowContainer>
      <p>{title}</p>
      {icon}
    </KnowContainer>
  );
}
