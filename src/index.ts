import 'dotenv/config';
import OpenAI from 'openai';
import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.error('Erro: defina OPENAI_API_KEY no arquivo .env.');
  process.exit(1);
}

const client = new OpenAI({ apiKey });
const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';

async function main(): Promise<void> {
  let prompt = process.argv.slice(2).join(' ').trim();

  if (!prompt) {
    const terminal = createInterface({ input, output });
    try {
      prompt = "fale um número de 1 a 10"//(await terminal.question('Digite seu prompt: ')).trim();
    } finally {
      terminal.close();
    }
  }

  if (!prompt) {
    console.error('Erro: o prompt não pode estar vazio.');
    process.exitCode = 1;
    return;
  }

  try {
    const response = await client.responses.create({ model, input: prompt });
    console.log('\nResposta do GPT:\n');
    console.log(response.output_text || '(O modelo não retornou texto.)');
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`\nFalha ao consultar a API da OpenAI: ${message}`);
    process.exitCode = 1;
  }
}


let messages = [];
async function main_two(personalidade: string, prompt: string): Promise<void> {
  const response = await client.responses.create({ model, input: [{ "role": "system", "content": personalidade }, { "role": "user", "content": prompt },] });
  const response2 = await client.responses.create({ model, instructions: personalidade, input: prompt })//BEEEEEEEEEEEM MELHOR
  console.log(response2.output_text)
}

//await main();
await main_two("Você responde qualquer coisa em alemão.", "Oi.");
