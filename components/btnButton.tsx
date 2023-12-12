import React from 'react';

interface Props {
  color: any;
  HandleClick: (str: string) => void;
  title: string;
  status?: boolean;
}

const BtnButton: React.FC<Props> = ({ HandleClick, color, title, status }) => {
  return (
    <button
      className={`btn btn-${color}`}
      onClick={() => HandleClick('bye')}
      disabled={status}
    >
      {title}
    </button>
  );
};

export default BtnButton;
