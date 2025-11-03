# Cadeia de Valor - Segurança e Saúde no Trabalho (SST)

Uma aplicação web interativa para visualização da cadeia de valor organizacional com foco em Segurança e Saúde no Trabalho, desenvolvida para o SESI.

## 🎯 Sobre o Projeto

Esta aplicação apresenta de forma visual e interativa a cadeia de valor organizacional, destacando:

- **Processos Principais**: Atividades core do negócio
- **Processos de Apoio**: Suporte e infraestrutura organizacional  
- **Processos de Gestão**: Governança e direcionamento estratégico
- **Stakeholders**: Relacionamentos com clientes, parceiros, fornecedores e sociedade

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes de UI modernos
- **Lucide React** - Ícones SVG otimizados
- **React Router** - Roteamento client-side

## 🎨 Características Visuais

- **Design System SESI**: Cores institucionais (azul #0d6efd e laranja #fd7e14)
- **Tema Claro/Escuro**: Alternância automática de temas
- **Ícones Personalizados**: Representação visual dos processos
- **Responsivo**: Adaptável a diferentes tamanhos de tela
- **Animações Suaves**: Transições e efeitos visuais elegantes

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos para execução local

```bash
# 1. Clone o repositório
git clone <URL_DO_REPOSITORIO>

# 2. Navegue até o diretório
cd cadeia-valor-saude

# 3. Instale as dependências
npm install

# 4. Execute o servidor de desenvolvimento
npm run dev

# 5. Acesse no navegador
# http://localhost:5173
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Build de desenvolvimento
npm run build:dev

# Linting
npm run lint

# Preview da build
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── icons/          # Ícones customizados
│   └── ui/             # Componentes de UI base
├── data/               # Dados dos processos
├── hooks/              # Hooks customizados
├── pages/              # Páginas da aplicação
├── styles/             # Estilos CSS
└── utils/              # Utilitários e helpers
```

## 🎨 Identidade Visual

O projeto segue rigorosamente o manual de identidade visual do SESI:

- **Azul Institucional**: `#0d6efd` - Confiança e segurança
- **Laranja Institucional**: `#fd7e14` - Criatividade e energia
- **Degradês Harmoniosos**: Transições suaves entre as cores
- **Tipografia**: Fontes system com fallbacks apropriados

## 📋 Funcionalidades

- ✅ Visualização interativa da cadeia de valor
- ✅ Modais informativos para cada processo
- ✅ Alternância de temas (claro/escuro)
- ✅ Design responsivo
- ✅ Ícones personalizados por categoria
- ✅ Animações e transições suaves
- ✅ Conformidade com identidade visual SESI

## 🔧 Configuração de Desenvolvimento

O projeto utiliza:

- **ESLint** para linting de código
- **TypeScript** para tipagem estática
- **Tailwind CSS** para estilização
- **Vite** para build e desenvolvimento

## 📄 Licença

Este projeto foi desenvolvido para o SESI e segue as diretrizes de propriedade intelectual da organização.

## 🤝 Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📞 Suporte

Para dúvidas ou suporte, entre em contato com a equipe de desenvolvimento do SESI.
