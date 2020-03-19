import React, { FC } from 'react';
import './Town.css';

type Props ={
  title: string;
  id: number;
  handleTown: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Town: FC<Props> = ({ title, handleTown, id }) => (
  <button
    type="button"
    value={title}
    id={String(id)}
    className="btn btn-outline-primary my_btn-outline-primary"
    onClick={handleTown}
  >
    {title}
  </button>
);
