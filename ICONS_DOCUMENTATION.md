# Documentação dos Ícones - Cadeia de Valor SST

## Visão Geral

Este documento descreve os ícones utilizados no projeto Cadeia de Valor SST, implementados com base na biblioteca **Lucide React** e seguindo os padrões do **Shadcn UI**.

## Componente Icon Reutilizável

### Localização
`src/components/ui/icon.tsx`

### Funcionalidades
- Suporte completo a temas claro e escuro
- Variantes de cor (default, muted, accent)
- Tamanhos responsivos (sm, md, lg, xl)
- Transições suaves
- Compatibilidade com Tailwind CSS

### Uso
```tsx
import { Icon } from '@/components/ui/icon';
import { Building2 } from 'lucide-react';

<Icon icon={Building2} size="lg" variant="accent" />
```

## Ícones por Componente

### Header (`src/components/Header.tsx`)
| Ícone | Componente Lucide | Função | Justificativa |
|-------|------------------|--------|---------------|
| 🏢 | `Building2` | Logo da empresa | Representa organização/empresa de forma profissional |
| 🎨 | `Palette` | Alternador de tema | Símbolo universal para personalização visual |

### BusinessProcesses (`src/components/BusinessProcesses.tsx`)
| Ícone | Componente Lucide | Função | Justificativa |
|-------|------------------|--------|---------------|
| 💼 | `Briefcase` | Processos de negócio | Representa atividades comerciais e operacionais |

### ManagementProcesses (`src/components/ManagementProcesses.tsx`)
| Ícone | Componente Lucide | Função | Justificativa |
|-------|------------------|--------|---------------|
| ⚙️ | `Settings` | Processos de gestão | Simboliza configuração, controle e administração |

### SupportProcesses (`src/components/SupportProcesses.tsx`)
| Ícone | Componente Lucide | Função | Justificativa |
|-------|------------------|--------|---------------|
| 🛡️ | `Shield` | Processos de apoio | Representa proteção, segurança e suporte |

### InfoSection (`src/components/InfoSection.tsx`)
| Ícone | Componente Lucide | Função | Justificativa |
|-------|------------------|--------|---------------|
| 🎯 | `Target` | Propósito | Simboliza objetivos, metas e direcionamento |
| 📄 | `FileText` | Escopo | Representa documentação e definição de escopo |

### StakeholderSection (`src/components/StakeholderSection.tsx`)
| Ícone | Componente Lucide | Função | Justificativa |
|-------|------------------|--------|---------------|
| 👥 | `Users` | Sociedade | Representa grupos de pessoas e comunidade |
| ❤️ | `Heart` | Clientes | Simboliza cuidado, atenção e relacionamento |

## Padrões de Design

### Compatibilidade com Temas
Todos os ícones seguem as variáveis CSS definidas em:
- `src/index.css` (tema principal)
- `src/cadeia-valor.css` (tema específico da cadeia de valor)

### Classes Tailwind Utilizadas
- **Cores**: `text-foreground`, `text-muted-foreground`, `text-accent-foreground`
- **Tamanhos**: `h-4 w-4` (sm), `h-5 w-5` (md), `h-6 w-6` (lg), `h-8 w-8` (xl)
- **Transições**: `transition-colors duration-200`

### Acessibilidade
- Todos os ícones possuem `aria-hidden="true"` quando decorativos
- Ícones funcionais incluem labels apropriados
- Contraste adequado em ambos os temas (claro/escuro)

## Referências

- **Lucide React**: https://lucide.dev/guide/packages/lucide-react
- **Shadcn UI**: https://ui.shadcn.com/docs/components
- **WCAG 2.1**: Diretrizes de acessibilidade seguidas
- **Tailwind CSS**: https://tailwindcss.com/docs

## Manutenção

Para adicionar novos ícones:
1. Importe o ícone desejado do `lucide-react`
2. Utilize o componente `Icon` reutilizável
3. Teste a compatibilidade com ambos os temas
4. Atualize esta documentação

## Versão
- **Lucide React**: 0.462.0
- **Última atualização**: Janeiro 2025