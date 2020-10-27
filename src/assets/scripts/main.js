/**
 * Import dependencies from node_modules
 * see commented examples below
 */
 
// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

(() => {
  const cm = document.getElementById("cryptedmail");
  cm.addEventListener('click', ()=> {
    cm.href = `mailto:${cm.dataset.name}@${cm.dataset.domain}.${cm.dataset.tld}`;
  });
  const cmi = document.getElementById('cmi'); 
  cmi.addEventListener('click', () => {
    cmi.href = `mailto:${cm.dataset.name}@${cm.dataset.domain}.${cm.dataset.tld}`;
  });
})();
