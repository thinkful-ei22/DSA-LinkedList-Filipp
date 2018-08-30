function display(list) {
  return console.log(JSON.stringify(list));
}

function size(list) {

  if (!list.head) {
    return console.log('The list is 0 links long');
  }
  let currNode = list.head;
  let size = 1;

  while (currNode.next !== null) {
    currNode = currNode.next;
    size++;
  }
  console.log(`The list is ${size} links long`);

}

function isEmpty(list) {
  if (list.head === null) {
    console.log('The list is empty.');
  } else {
    console.log('The list is not empty.');
  }
}

function findPrevious(list, item) {
  let currNode = list.head;
  let previousNode = list.head;

  if (!list.head) {
    return null;
  }

  while (currNode.value !== item) {
    previousNode = currNode;
    currNode = currNode.next;
  }

  console.log(`The node before ${item} is ${previousNode.value}`);
}

function findLast(list) {
  let currNode = list.head;
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  console.log(`The last node in this list is ${currNode.value}`);
}


module.exports = {
  display, size, isEmpty, findPrevious, findLast
};