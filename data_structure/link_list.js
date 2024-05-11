function createLinkList() {
  let head = null;

  function insertHead(data) {
    const newNode = {
      data,
      next: null,
    };

    if (head === null) {
      head = newNode;
      return head;
    }

    newNode.next = head;
    head = newNode;

    return head;
  }

  function printNode() {
    if (head === null) return;

    let currentNode = head;

    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  return {
    insertHead,
    printNode,
  };
}

const linkedlist = createLinkList();
linkedlist.insertHead(5);
linkedlist.insertHead(4);
linkedlist.insertHead(3);
linkedlist.insertHead(2);
linkedlist.insertHead(1);
linkedlist.printNode();
