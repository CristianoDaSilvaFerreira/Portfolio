import { ReactNode } from 'react';
import { ItemContainer } from './styles';

interface ProfiencyProps {
  year: string;
  title: string;
  description: string;
  institution?: string | ReactNode;
  hour?: string | ReactNode;
}

export default function ProfiencyItem({
  year,
  title,
  description,
  institution,
  hour
}: ProfiencyProps) {
  return (
    <ItemContainer>
      <div data-aos="zoom-out-down">
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{institution}</p>
        <p>{hour}</p>
      </div>
    </ItemContainer>
  );
}
