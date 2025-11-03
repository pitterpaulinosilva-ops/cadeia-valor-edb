import React from 'react';
import {
  PurposeIcon,
  ScopeIcon,
  CollaboratorsIcon,
  PartnersIcon,
  ManagementIcon,
  BusinessIcon,
  SupportIcon,
  SocietyIcon,
  CompanyIcon,
  EmployeeIcon,
  ClientIcon,
} from './icons/CustomIcons';
import './icons/CustomIcons.css';
import { Link } from 'react-router-dom';

interface IconDemoProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  name: string;
  description: string;
  animation: string;
  hoverEffect: string;
}

const IconDemo: React.FC<IconDemoProps> = ({ icon: Icon, name, description, animation, hoverEffect }) => (
  <div style={{
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '24px',
    transition: 'all 0.3s ease',
    transform: 'translateY(0)',
    border: '1px solid #e5e7eb'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow = '0 20px 25px rgba(0, 0, 0, 0.15)';
    e.currentTarget.style.transform = 'translateY(-8px)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    e.currentTarget.style.transform = 'translateY(0)';
  }}>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '16px',
      padding: '16px',
      background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)',
      borderRadius: '8px'
    }}>
      <Icon size={64} className="icon-lg" />
    </div>
    <div style={{ textAlign: 'center' }}>
      <h3 style={{ 
        fontSize: '20px', 
        fontWeight: 'bold', 
        color: '#1f2937', 
        marginBottom: '8px',
        margin: '0 0 8px 0'
      }}>{name}</h3>
      <p style={{ 
        color: '#6b7280', 
        fontSize: '14px', 
        marginBottom: '12px',
        margin: '0 0 12px 0',
        lineHeight: '1.4'
      }}>{description}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{
          background: '#dbeafe',
          borderRadius: '8px',
          padding: '8px'
        }}>
          <span style={{ fontSize: '12px', fontWeight: '600', color: '#1d4ed8' }}>Animação:</span>
          <span style={{ fontSize: '12px', color: '#2563eb', marginLeft: '4px' }}>{animation}</span>
        </div>
        <div style={{
          background: '#e0e7ff',
          borderRadius: '8px',
          padding: '8px'
        }}>
          <span style={{ fontSize: '12px', fontWeight: '600', color: '#4338ca' }}>Hover:</span>
          <span style={{ fontSize: '12px', color: '#5b21b6', marginLeft: '4px' }}>{hoverEffect}</span>
        </div>
      </div>
    </div>
  </div>
);

const IconShowcase: React.FC = () => {
  const iconData: IconDemoProps[] = [
    {
      icon: PurposeIcon,
      name: "Propósito",
      description: "Representa objetivos e metas organizacionais com design de alvo sofisticado",
      animation: "Pulse contínuo",
      hoverEffect: "Zoom + Glow intenso"
    },
    {
      icon: ScopeIcon,
      name: "Escopo",
      description: "Simboliza alcance e análise com lupa e ondas de expansão",
      animation: "Bounce suave",
      hoverEffect: "Rotate + Shimmer"
    },
    {
      icon: CollaboratorsIcon,
      name: "Colaboradores",
      description: "Equipe conectada com rede de relacionamentos avançada",
      animation: "Sway lateral",
      hoverEffect: "Scale + Pulse"
    },
    {
      icon: PartnersIcon,
      name: "Parceiros",
      description: "Aperto de mãos estilizado com ondas de energia de parceria",
      animation: "Heartbeat rítmico",
      hoverEffect: "Shake + Glow"
    },
    {
      icon: ManagementIcon,
      name: "Gestão",
      description: "Engrenagem complexa representando processos gerenciais",
      animation: "Rotate contínuo",
      hoverEffect: "Rotate acelerado"
    },
    {
      icon: BusinessIcon,
      name: "Negócio",
      description: "Maleta executiva com detalhes corporativos refinados",
      animation: "Float vertical",
      hoverEffect: "Bounce + Glow"
    },
    {
      icon: SupportIcon,
      name: "Apoio",
      description: "Escudo protetor com check mark de segurança",
      animation: "Glow pulsante",
      hoverEffect: "Scale + Shimmer"
    },
    {
      icon: SocietyIcon,
      name: "Sociedade",
      description: "Comunidade diversificada com conexões sociais aprimoradas",
      animation: "Wave ondulante",
      hoverEffect: "Zoom + Pulse"
    },
    {
      icon: CompanyIcon,
      name: "Empresa",
      description: "Complexo empresarial com arquitetura corporativa detalhada",
      animation: "Shimmer brilhante",
      hoverEffect: "Float + Glow"
    },
    {
      icon: EmployeeIcon,
      name: "Funcionários",
      description: "Coração representando cuidado e bem-estar dos colaboradores",
      animation: "Heartbeat natural",
      hoverEffect: "Pulse + Scale"
    },
    {
      icon: ClientIcon,
      name: "Clientes",
      description: "Pessoa com símbolos de satisfação e qualidade premium",
      animation: "Zoom suave",
      hoverEffect: "Rotate + Shimmer"
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #dbeafe 50%, #e0e7ff 100%)',
      padding: '48px 16px'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ marginBottom: '24px' }}>
            <Link 
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '8px 16px',
                background: '#3b82f6',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'background 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#2563eb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#3b82f6';
              }}
            >
              ← Voltar para Aplicação
            </Link>
          </div>
          
          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            color: '#1f2937', 
            marginBottom: '16px',
            margin: '0 0 16px 0'
          }}>
            Ícones Customizados
            <span style={{
              background: 'linear-gradient(90deg, #2563eb 0%, #4f46e5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginLeft: '8px'
            }}>
              Premium
            </span>
          </h1>
          <p style={{ 
            fontSize: '20px', 
            color: '#6b7280', 
            maxWidth: '768px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Coleção completa de ícones SVG personalizados com gradientes avançados, 
            animações CSS sofisticadas e efeitos visuais de alta qualidade
          </p>
          <div style={{ 
            marginTop: '24px', 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '16px',
            fontSize: '14px'
          }}>
            <span style={{
              background: '#dbeafe',
              color: '#1e40af',
              padding: '6px 12px',
              borderRadius: '20px',
              fontWeight: '500'
            }}>
              11 Ícones Únicos
            </span>
            <span style={{
              background: '#e0e7ff',
              color: '#3730a3',
              padding: '6px 12px',
              borderRadius: '20px',
              fontWeight: '500'
            }}>
              15+ Animações CSS
            </span>
            <span style={{
              background: '#f3e8ff',
              color: '#581c87',
              padding: '6px 12px',
              borderRadius: '20px',
              fontWeight: '500'
            }}>
              Efeitos Avançados
            </span>
            <span style={{
              background: '#dcfce7',
              color: '#166534',
              padding: '6px 12px',
              borderRadius: '20px',
              fontWeight: '500'
            }}>
              Totalmente Responsivo
            </span>
          </div>
        </div>

        {/* Icons Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
          marginBottom: '48px'
        }}>
          {iconData.map((item, index) => (
            <IconDemo
              key={index}
              icon={item.icon}
              name={item.name}
              description={item.description}
              animation={item.animation}
              hoverEffect={item.hoverEffect}
            />
          ))}
        </div>

        {/* Technical Specs */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
          padding: '32px',
          marginBottom: '48px'
        }}>
          <h2 style={{ 
            fontSize: '32px', 
            fontWeight: 'bold', 
            color: '#1f2937', 
            marginBottom: '24px', 
            textAlign: 'center',
            margin: '0 0 24px 0'
          }}>
            Especificações Técnicas
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px'
          }}>
            <div style={{
              textAlign: 'center',
              padding: '16px',
              background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
              borderRadius: '8px'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2563eb', marginBottom: '8px' }}>SVG</div>
              <div style={{ fontSize: '14px', color: '#6b7280' }}>Formato Vetorial</div>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '16px',
              background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
              borderRadius: '8px'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#4f46e5', marginBottom: '8px' }}>CSS3</div>
              <div style={{ fontSize: '14px', color: '#6b7280' }}>Animações Avançadas</div>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '16px',
              background: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
              borderRadius: '8px'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#7c3aed', marginBottom: '8px' }}>Gradientes</div>
              <div style={{ fontSize: '14px', color: '#6b7280' }}>Lineares & Radiais</div>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '16px',
              background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
              borderRadius: '8px'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#059669', marginBottom: '8px' }}>Filtros</div>
              <div style={{ fontSize: '14px', color: '#6b7280' }}>Glow & Blur Effects</div>
            </div>
          </div>
        </div>

        {/* Animation Demo */}
        <div style={{
          background: 'linear-gradient(90deg, #2563eb 0%, #4f46e5 100%)',
          borderRadius: '16px',
          boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
          padding: '32px',
          color: 'white'
        }}>
          <h2 style={{ 
            fontSize: '32px', 
            fontWeight: 'bold', 
            marginBottom: '24px', 
            textAlign: 'center',
            margin: '0 0 24px 0'
          }}>
            Demonstração de Animações
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '32px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '8px' }}>
                <PurposeIcon size={48} />
              </div>
              <div style={{ fontSize: '14px', fontWeight: '500' }}>Pulse</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '8px' }}>
                <ScopeIcon size={48} />
              </div>
              <div style={{ fontSize: '14px', fontWeight: '500' }}>Bounce</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '8px' }}>
                <CollaboratorsIcon size={48} />
              </div>
              <div style={{ fontSize: '14px', fontWeight: '500' }}>Sway</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '8px' }}>
                <PartnersIcon size={48} />
              </div>
              <div style={{ fontSize: '14px', fontWeight: '500' }}>Heartbeat</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '8px' }}>
                <ManagementIcon size={48} />
              </div>
              <div style={{ fontSize: '14px', fontWeight: '500' }}>Rotate</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '8px' }}>
                <BusinessIcon size={48} />
              </div>
              <div style={{ fontSize: '14px', fontWeight: '500' }}>Float</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ color: '#6b7280', fontSize: '16px' }}>
            Todos os ícones foram criados com SVG customizado e animações CSS avançadas
          </p>
        </div>
      </div>
    </div>
  );
};

export default IconShowcase;