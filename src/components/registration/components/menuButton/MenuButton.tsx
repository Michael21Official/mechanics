// MenuButton.tsx

import React from 'react';

interface MenuButtonProps {
  label: string;
  onClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ label, onClick }) => {
  return (
    <div className="menu-button">
      <button type="button" onClick={onClick} className="button">
        {label}
      </button>
    </div>
  );
};

export default MenuButton;
