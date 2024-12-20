# Como contribuir nesse repositório

Abaixo segue um guia passo a passo para que qualquer pessoa, mesmo sem experiência prévia, possa adicionar contribuições a esse repositório. A abordagem mais comum é via **fork** e **pull request**, pois não exige permissões especiais no repositório original e é amplamente aceita pela comunidade.

## Antes de começar
- **Tenha uma conta no GitHub**: Caso ainda não tenha, acesse [https://github.com](https://github.com) e crie uma conta gratuita.
- **Instale o Git no computador**: Se planeja fazer as alterações localmente, você precisará do Git instalado. Acesse [https://git-scm.com/downloads](https://git-scm.com/downloads) e siga as instruções de instalação para o seu sistema operacional.
- **Opcional: Instalar um editor de código ou IDE**: Ter um editor de texto especializado (por ex. VS Code, Atom, ou outro) facilita a edição e visualização do código.

## Passo a passo

1. **Acesse o repositório no GitHub**  
   Vá até a página do repositório ao qual você deseja contribuir, por exemplo:  
   `https://github.com/Tocchetto/DemosKratos.git`

2. **Crie um "fork" do repositório**  
   - Dentro do repositório, procure pelo botão **"Fork"** no canto superior direito da página.  
   - Clique em **"Fork"**. Isso criará uma cópia completa do repositório no seu próprio perfil do GitHub, podendo nomeá-lo como quiser.
   Exemplo: Se o repositório original é `https://github.com/Tocchetto/DemosKratos.git`, após o fork você terá `github.com/seu-usuario/repositorio`.

3. **Clone o seu fork no computador**  
   - No seu fork, clique no botão **"Code"** (geralmente um botão verde) e copie a URL do repositório (HTTPS, SSH ou GitHub CLI).
   - No terminal, vá até a pasta onde deseja baixar o código e execute:
     ```bash
     git clone https://github.com/seu-usuario/repositorio.git
     ```
   - Isso criará uma pasta com o nome do repositório.

4. **Mantenha seu fork atualizado**
    - Caso o repositório original seja atualizado, sincronize o seu fork:
    ```bash
    git remote add upstream https://github.com/Tocchetto/DemosKratos.git
    git fetch upstream
    git checkout main
    git merge upstream/main
    ```
    - Ajuste o nome da branch principal conforme necessário (main ou master).

5. **Crie uma nova branch para suas alterações**  
   É uma boa prática criar uma nova branch para cada contribuição.  
   No terminal:
   ```bash
   cd repositorio
   git checkout -b minha-nova-funcionalidade
   ```
   - Substitua minha-nova-feature por um nome que descreva sua contribuição.

6. **Faça as alterações necessárias**
Abra o arquivo no seu editor de código e realize as modificações desejadas (corrigir um bug, adicionar uma funcionalidade, etc.).

7. **Teste as suas alterações**
   - Rode testes automatizados, se existirem.
   - Caso não haja testes, verifique manualmente o impacto das mudanças.
    
8. **Faça o commit de suas alterações**
   - Verifique o status:
   ```bash
   git status
   ```
   - Adicione todos os arquivos alterados:
   ```bash
   git add .
   ```
   - Faça o commit com uma mensagem descritiva:
   ```bash
   git commit -m "Adicionei nova funcionalidade X que faz Y"
   ```

9. **Envie suas alterações para o seu fork no GitHub**
   ```bash
   git push origin minha-nova-funcionalidade
   ```

10. **Crie um Pull Request (PR)**
   - Acesse o repositório no seu fork no GitHub.
   - Você verá um botão "Compare & pull request". Clique nele. Caso não apareça, vá até a aba "Pull requests" no seu fork e clique em "New pull request".
   - Selecione o repositório original como base (e não o seu fork), escolhendo a branch correta.
   - Adicione um título e uma descrição clara do que foi modificado.
   - Clique em "Create pull request".