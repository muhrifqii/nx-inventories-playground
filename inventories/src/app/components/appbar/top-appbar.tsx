import React from 'react';
import './top-appbar.scss';

interface TopAppBarProps {
  children?: React.ReactNode;
}

function TopAppBar({
  children,
}: TopAppBarProps) {
  return (
    <div className="topAppBar">
      <div className="logo">LOGO</div>
      <div className="menu">
        <span>Dashboard</span>
        <span>Inventories</span>
      </div>
    </div>
  );
}

export default TopAppBar;
