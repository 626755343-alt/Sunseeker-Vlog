import { drawNextPrompt, promptCatalog } from './prompts.js';
import { renderPrompt } from './renderPrompt.js';

const promptContent = document.querySelector('#prompt-content');
const refreshButton = document.querySelector('#refresh-prompt');

let currentPrompt = null;
let remainingDeck = [];

function updatePrompt() {
  const next = drawNextPrompt(remainingDeck, promptCatalog, currentPrompt);
  currentPrompt = next.prompt;
  remainingDeck = next.remainingDeck;
  promptContent.classList.remove('is-refreshing');
  void promptContent.offsetWidth;
  promptContent.innerHTML = renderPrompt(currentPrompt);
  promptContent.classList.add('is-refreshing');
}

updatePrompt();
refreshButton.addEventListener('click', updatePrompt);

