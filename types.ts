import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface PainPoint {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
}

export interface WorkshopDetail {
  label: string;
  value: string;
  icon: React.ElementType;
}