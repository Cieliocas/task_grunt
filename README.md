# Login Page

Este é um projeto de página de login desenvolvido com HTML, CSS (usando LESS) e JavaScript.

## Descrição

Este projeto é uma página de login interativa com design responsivo e diversas funcionalidades implementadas em JavaScript. O layout foi estilizado usando LESS para permitir a reutilização de mixins e variáveis, facilitando a manutenção e expansão do código.

## Funcionalidades

- **Formulário de Login:**
  - Validação de campos para garantir que todos os campos sejam preenchidos antes do envio.
- **Mostrar/Ocultar Senha:**
  - Botão para alternar a visibilidade da senha digitada.
- **Animação ao Clicar no Botão:**
  - Efeito de "bounce" ao clicar no botão de login.
- **Modo Escuro/Claro:**
  - Alternar entre modo escuro e claro para melhorar a experiência do usuário.

## Tecnologias Utilizadas

- HTML5
- CSS3 (LESS)
- JavaScript
- Google Fonts

## Estrutura de Arquivos

├── index.html ├── styles │ ├── main.less ├── scripts │ ├── main.js ├── images │ 

# Automação de Tarefas com Grunt

Este projeto foi desenvolvido para explorar e implementar automações com o Grunt, um dos principais task runners do desenvolvimento web. Durante o exercício, foram configuradas tarefas personalizadas e plugins para compilar, minificar, observar mudanças, e otimizar o fluxo de trabalho. 

## 📋 Objetivos e Aprendizados

- **Propósito e Benefícios do Grunt**: Entendimento do Grunt como uma ferramenta de automação de tarefas para simplificar processos repetitivos no desenvolvimento web.
  
- **Instalação e Configuração**:
  - Instalação do Grunt globalmente e localmente em um projeto.
  - Criação do arquivo de configuração `Gruntfile.js` para definir e personalizar as tarefas.

- **Tarefas Personalizadas**:
  - Criação de tarefas customizadas para execução de diversas operações e otimização da ordem de execução para um fluxo de trabalho mais eficiente.
  - Simulação de tarefas demoradas e assíncronas para compreender como o Grunt gerencia tarefas de execução.

- **Compilação de CSS com LESS**:
  - Instalação e configuração do plugin LESS no Grunt.
  - Definição de tarefas de compilação separadas para ambientes de desenvolvimento e produção, permitindo a geração de CSS otimizado automaticamente.

- **Execução Paralela de Tarefas**:
  - Utilização do plugin `grunt-concurrent` para executar tarefas de forma paralela, otimizando o tempo e melhorando a performance das automações.

- **Estrutura e Organização do Projeto**:
  - Organização de pastas e configuração de ambientes distintos (desenvolvimento e produção).
  - Uso do Grunt para compilar código CSS, aproveitando pré-processadores como o LESS.
  - Implementação de variáveis e importações de fontes externas para facilitar a manutenção e modularização dos estilos CSS.

- **Observação de Arquivos**:
  - Instalação e configuração do plugin `grunt-contrib-watch`.
  - Configuração do `watch` para monitorar mudanças nos arquivos e automatizar tarefas, otimizando o fluxo de desenvolvimento.

- **Otimização de HTML e JavaScript**:
  - Otimização do HTML usando o plugin `grunt-contrib-htmlmin` para minificar arquivos e reduzir o tempo de carregamento.
  - Configuração do plugin `grunt-replace` para substituir strings específicas.
  - Compressão de arquivos JavaScript usando `grunt-contrib-uglify`, aumentando a performance do site.

- **Funcionalidades de JavaScript**:
  - Implementação de `Math.random()`, `Math.floor()`, e `Math.ceil()` para geração e arredondamento de números aleatórios em tarefas JavaScript.

- **Controle de Versão e Hospedagem do Código**:
  - Configuração do Grunt para rodar tarefas automaticamente e versionamento do projeto com Git.
  - Criação de um repositório remoto para hospedagem do código-fonte.

## 🛠️ Tecnologias e Ferramentas Utilizadas

- **Grunt**: Task runner para automação de tarefas.
- **Plugins do Grunt**:
  - `grunt-contrib-less`: Compilação de LESS para CSS.
  - `grunt-contrib-watch`: Observação de mudanças nos arquivos.
  - `grunt-contrib-htmlmin`: Minificação de HTML.
  - `grunt-contrib-uglify`: Compressão de JavaScript.
  - `grunt-replace`: Substituição de strings.
  - `grunt-concurrent`: Execução paralela de tarefas.

## 🚀 Como Utilizar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Cieliocas/task_grunt.git
