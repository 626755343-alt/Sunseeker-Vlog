import { promptCatalog, selectPrompt } from './prompts.js';
import { renderPrompt } from './renderPrompt.js';

const promptContent = document.querySelector('#prompt-content');
const refreshButton = document.querySelector('#refresh-prompt');

let currentPrompt = selectPrompt(promptCatalog, null);

function updatePrompt() {
  currentPrompt = selectPrompt(promptCatalog, currentPrompt);
  promptContent.classList.remove('is-refreshing');
  void promptContent.offsetWidth;
  promptContent.innerHTML = renderPrompt(currentPrompt);
  promptContent.classList.add('is-refreshing');
}

promptContent.innerHTML = renderPrompt(currentPrompt);
refreshButton.addEventListener('click', updatePrompt);

