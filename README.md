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



   # Login Page

This project is a login page developed with HTML, CSS (using LESS), and JavaScript.

## Description

This project is an interactive login page with a responsive design and various JavaScript functionalities. The layout is styled using LESS to allow for mixin and variable reuse, making the code easier to maintain and expand.

## Features

- **Login Form:**
  - Field validation to ensure all fields are filled in before submission.
- **Show/Hide Password:**
  - Button to toggle the visibility of the entered password.
- **Button Click Animation:**
  - "Bounce" effect when clicking the login button.
- **Dark/Light Mode:**
  - Toggle between dark and light modes for improved user experience.

## Technologies Used

- HTML5
- CSS3 (LESS)
- JavaScript
- Google Fonts

## File Structure

├── index.html ├── styles │ ├── main.less ├── scripts │ ├── main.js ├── images


# Task Automation with Grunt

This project was developed to explore and implement automations with Grunt, one of the main task runners in web development. During this exercise, custom tasks and plugins were configured to compile, minify, watch for changes, and optimize workflow.

## 📋 Objectives and Learning Outcomes

- **Purpose and Benefits of Grunt**: Understanding Grunt as a task automation tool to simplify repetitive processes in web development.
  
- **Installation and Configuration**:
  - Installation of Grunt globally and locally within a project.
  - Creation of the `Gruntfile.js` configuration file to define and customize tasks.

- **Custom Tasks**:
  - Creation of custom tasks to perform various operations and optimize task execution order for a more efficient workflow.
  - Simulation of lengthy and asynchronous tasks to understand how Grunt manages task execution.

- **CSS Compilation with LESS**:
  - Installation and configuration of the LESS plugin in Grunt.
  - Task setup for separate compilation in development and production environments, enabling the automated generation of optimized CSS.

- **Parallel Task Execution**:
  - Use of the `grunt-concurrent` plugin to execute tasks in parallel, reducing time and improving performance in automations.

- **Project Structure and Organization**:
  - Organization of folders and configuration of distinct development and production environments.
  - Use of Grunt to compile CSS code, leveraging preprocessors like LESS.
  - Implementation of variables and external font imports for better maintenance and modularization of CSS styles.

- **File Watching**:
  - Installation and configuration of the `grunt-contrib-watch` plugin.
  - Setup of `watch` to monitor file changes and automate tasks, optimizing the development workflow.

- **HTML and JavaScript Optimization**:
  - HTML optimization using the `grunt-contrib-htmlmin` plugin to minify files and reduce load times.
  - Configuration of the `grunt-replace` plugin to replace specific strings.
  - JavaScript file compression using `grunt-contrib-uglify`, enhancing site performance.

- **JavaScript Functionalities**:
  - Implementation of `Math.random()`, `Math.floor()`, and `Math.ceil()` for random number generation and rounding in JavaScript tasks.

- **Version Control and Code Hosting**:
  - Grunt configuration to automatically run tasks and project versioning with Git.
  - Creation of a remote repository to host the source code.

## 🛠️ Technologies and Tools Used

- **Grunt**: Task runner for automation.
- **Grunt Plugins**:
  - `grunt-contrib-less`: LESS to CSS compilation.
  - `grunt-contrib-watch`: File change monitoring.
  - `grunt-contrib-htmlmin`: HTML minification.
  - `grunt-contrib-uglify`: JavaScript compression.
  - `grunt-replace`: String replacement.
  - `grunt-concurrent`: Parallel task execution.

## 🚀 How to Use the Project

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Cieliocas/task_grunt.git

