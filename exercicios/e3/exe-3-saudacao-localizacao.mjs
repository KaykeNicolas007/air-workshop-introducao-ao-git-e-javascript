// TODO: importe saudar de "./saudacao.mjs" e minhaLocalizacao, descrever e distancia de "./localizacao.mjs".
import { saudar } from "./saudacao.mjs";
import { minhaLocalizacao, descrever, distancia } from "./localizacao.mjs";

const ORIGEM = { x: 0, y: 0 };

// TODO: combine a saudação com a localização: "<saudação> Você está em (x, y), a N unidades da origem."
export function saudarComLocalizacao(nome, ponto) {
  return `${saudar(nome)} Você está em (${minhaLocalizacao.x}, ${minhaLocalizacao.y}), a N unidades da origem.`;
}

console.log(saudarComLocalizacao("Ana"));
