const LinkedList = require('./linked-list-class');
const { display, size, isEmpty, findPrevious, findLast } = require('./linked-list-functions');

function main() {

  let SLL = new LinkedList();

  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');

  SLL.remove('squirell');

  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);

  SLL.remove('Tauhida');

  display(SLL);
  size(SLL);
  isEmpty(SLL);
  findPrevious(SLL, 'Apollo');
  findLast(SLL);
}

main();