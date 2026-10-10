# Cliente GPT em TypeScript

Aplicação de linha de comando que envia um prompt à API da OpenAI e imprime a resposta do GPT.

## Requisitos

- Node.js 20 ou superior
- Uma chave de API da OpenAI

## Configuração

1. Instale as dependências com `npm install`.
2. Copie `.env.example` para `.env`.
3. No `.env`, substitua o valor de `OPENAI_API_KEY` pela sua chave. Opcionalmente, altere `OPENAI_MODEL` (padrão: `gpt-4o-mini`).

Mantenha `.env` privado e não compartilhe sua chave.

## Uso

Para iniciar em modo interativo e digitar o prompt no terminal:

```bash
npm run dev
```

Também é possível passar o prompt como argumento:

```bash
npm run dev -- "Explique o que é TypeScript em poucas palavras"
```

Para compilar e executar a versão de produção:

```bash
npm run build
npm start
```

## Verificação

Execute `npm run typecheck` para verificar os tipos sem gerar arquivos.
