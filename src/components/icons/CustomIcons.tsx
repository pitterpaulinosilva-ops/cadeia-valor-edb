import React from 'react';
import { 
  Target, 
  Truck, 
  UserPlus, 
  Handshake, 
  Users, 
  UserCheck,
  Building2,
  Briefcase,
  Settings,
  Globe,
  User,
  Shield
} from 'lucide-react';

interface IconProps {
  size?: number;
  className?: string;
}

// Componente wrapper para aplicar efeitos animados aos ícones Lucide
const AnimatedIcon: React.FC<{
  LucideIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: number;
  className?: string;
  iconName: string;
  color?: string;
  shadowColor?: string;
}> = ({ LucideIcon, size = 24, className = '', iconName, color = '#2563eb', shadowColor }) => {
  // Define a cor da sombra baseada na cor do ícone se não especificada
  const getShadowColor = () => {
    if (shadowColor) return shadowColor;
    
    switch (color) {
      case '#22c55e': // Verde
        return 'rgba(34, 197, 94, 0.6)';
      case '#f97316': // Laranja
        return 'rgba(249, 115, 22, 0.6)';
      default: // Azul padrão
        return 'rgba(0, 71, 182, 0.6)';
    }
  };

  return (
    <div className={`custom-icon ${iconName}-icon ${className}`} style={{ width: size, height: size }}>
      <LucideIcon 
        size={size} 
        className="w-full h-full"
        style={{
          filter: `drop-shadow(0 0 8px ${getShadowColor()})`,
          color: color,
          transition: 'all 0.3s ease'
        }}
      />
    </div>
  );
};

// Novos ícones usando Lucide React com animações
export const PurposeIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <AnimatedIcon LucideIcon={Target} size={size} className={className} iconName="purpose" />
);

export const SuppliersIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <AnimatedIcon LucideIcon={Truck} size={size} className={className} iconName="suppliers" />
);

export const CollaboratorsIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <AnimatedIcon LucideIcon={UserPlus} size={size} className={className} iconName="collaborators" />
);

export const PartnersIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <AnimatedIcon LucideIcon={Handshake} size={size} className={className} iconName="partners" />
);

export const SocietyIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <AnimatedIcon LucideIcon={Globe} size={size} className={className} iconName="society" />
);

export const ClientIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <AnimatedIcon LucideIcon={UserCheck} size={size} className={className} iconName="client" />
);

// Ícones adicionais para outros componentes (mantendo compatibilidade)
export const ScopeIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <AnimatedIcon LucideIcon={Target} size={size} className={className} iconName="scope" />
);

export const ManagementIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <AnimatedIcon LucideIcon={Settings} size={size} className={className} iconName="management" />
);

export const BusinessIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <AnimatedIcon LucideIcon={Briefcase} size={size} className={className} iconName="business" color="#f97316" />
);

export const SupportIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <AnimatedIcon LucideIcon={Shield} size={size} className={className} iconName="support" color="#22c55e" />
);

export const CompanyIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <AnimatedIcon LucideIcon={Building2} size={size} className={className} iconName="company" />
);

export const EmployeeIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <AnimatedIcon LucideIcon={User} size={size} className={className} iconName="employee" />
);

export default {
  PurposeIcon,
  ScopeIcon,
  SuppliersIcon,
  CollaboratorsIcon,
  PartnersIcon,
  ManagementIcon,
  BusinessIcon,
  SupportIcon,
  SocietyIcon,
  CompanyIcon,
  EmployeeIcon,
  ClientIcon,
};