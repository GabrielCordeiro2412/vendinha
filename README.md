# Projeto Vendinha - INTERFOCUS TECNOLOGIA

Olá equipe Interfocus Tecnologia, tudo bem? Este arquivo README fornece informações sobre as bibliotecas utilizadas no projeto e instruções para executá-lo.

![demonstracao](https://github.com/GabrielCordeiro2412/vendinha/blob/master/demonstracao.gif)

## Bibliotecas Utilizadas

Aqui estão as bibliotecas utilizadas no projeto, juntamente com uma breve descrição do seu propósito:

### @react-navigation/bottom-tabs
- **Versão:** ^6.5.8
- **Descrição:** Esta biblioteca é utilizada para criar uma navegação por abas na parte inferior da aplicação. É ideal para organizar e alternar entre diferentes seções ou funcionalidades de forma intuitiva, melhorando a usabilidade da aplicação.

### @react-navigation/native
- **Versão:** ^6.1.7
- **Descrição:** O React Navigation é uma biblioteca essencial para o gerenciamento de navegação em aplicativos React Native. Ela permite a criação de pilhas de navegação, gavetas de navegação e muito mais. Utilizamos esta biblioteca como base para toda a navegação na aplicação.

### @react-navigation/native-stack
- **Versão:** ^6.9.13
- **Descrição:** O Native Stack Navigation é uma extensão do React Navigation que nos permite criar uma navegação em pilha nativa para melhorar o desempenho e a compatibilidade com dispositivos Android e iOS. É usado para gerenciar a navegação empilhada em nossa aplicação.

### axios
- **Versão:** ^1.5.0
- **Descrição:** O Axios é uma biblioteca amplamente usada para fazer requisições HTTP. Utilizamos o Axios para realizar chamadas a APIs externas, obter e enviar dados, garantindo uma comunicação eficiente e segura com servidores.

### cpf-check
- **Versão:** ^3.0.0
- **Descrição:** Esta biblioteca é usada para validar e verificar números de CPF. É especialmente útil quando precisamos garantir que um CPF fornecido pelo usuário seja válido antes de continuar com determinada ação.

### date-fns
- **Versão:** ^2.30.0
- **Descrição:** O Date-fns é uma biblioteca para manipulação de datas em JavaScript. Utilizamos esta biblioteca para realizar formatação de datas, cálculos de intervalos de tempo e outras operações relacionadas a datas.

### react-native-masked-text
- **Versão:** ^1.13.0
- **Descrição:** O react-native-masked-text é usado para criar máscaras em campos de entrada de texto, como máscaras para números de telefone, CPF, CEP, entre outros. Isso ajuda a padronizar e melhorar a entrada de dados do usuário.

### react-native-modal
- **Versão:** ^13.0.1
- **Descrição:** O react-native-modal é utilizado para criar modais na aplicação, como janelas de confirmação, diálogos e outros elementos que requerem interação com o usuário sem a necessidade de navegar para uma nova tela.

### react-native-safe-area-context
- **Versão:** 4.6.3
- **Descrição:** Esta biblioteca é usada para gerenciar as áreas seguras em dispositivos iOS com bordas arredondadas, como o iPhone X e modelos posteriores. Garante que o conteúdo da aplicação seja exibido corretamente, respeitando as margens seguras do dispositivo.

### react-native-screens
- **Versão:** ~3.22.0
- **Descrição:** O react-native-screens é uma biblioteca que melhora o desempenho da navegação, especialmente em aplicativos com várias telas. Ele permite a renderização nativa das telas, o que leva a uma experiência mais suave para o usuário.

### react-native-svg
- **Versão:** ^12.1.0
- **Descrição:** O react-native-svg é uma biblioteca para renderizar gráficos vetoriais (SVG) em aplicativos React Native. É amplamente utilizado para criar ícones, gráficos e elementos de interface de usuário com alta qualidade e escalabilidade.


### react-native-svg-transformer
- **Versão:** ^1.1.0
- **Descrição:** Essa biblioteca é usada para permitir a importação e utilização de arquivos SVG diretamente no código do React Native. Isso facilita a criação de ícones e gráficos vetoriais de alta qualidade.

### styled-components
- **Versão:** ^6.0.8
- **Descrição:** O styled-components é uma biblioteca de estilização que utiliza a sintaxe de template literals para a criação de estilos CSS em JavaScript. É usado para a estilização de componentes de forma mais modular e reutilizável.

## Como Instalar as Dependências

Se você deseja instalar as dependências do projeto, basta executar o seguinte comando no terminal:

```bash
npm install
```
ou 
```bash
yarn install
