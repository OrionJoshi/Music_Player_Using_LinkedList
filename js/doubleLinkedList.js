// Creating a node
class Node {
  constructor(name, length, path) {
    this.musicNode = {
      name: name,
      length: length,
      path: path,
    };
    this.prev = null;
    this.next = null;
  }
}

// creating double liked list obj and pointer
class DoubllyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.tempPos = null;
  }

  // push node to DLL
  push(name, length, path) {
    const newNode = new Node(name, length, path);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  // set position of current node
  // default is pointer of head node
  setDefaulltPointer() {
    this.tempPos = this.head;
  }

  // traverse DLL and return music obj
  traverse(direction) {
    // forward direction
    if (direction === 1 && this.tempPos.next != null) {
      this.tempPos = this.tempPos.next;
      return this.tempPos.musicNode;
    } else if (direction === -1 && this.tempPos.prev != null) {
      //backward direction
      this.tempPos = this.tempPos.prev;
      return this.tempPos.musicNode;
    } else {
      return 0;
    }
  }

  // check for position of node
  nodePosition() {
    if (this.tempPos.next == null) {
      return -1; // last pos
    } else if (this.tempPos.prev == null) {
      return 1; // first pos
    } else {
      return 0; // middle pos
    }
  }
}

// inserting music in double linked list
const dll = new DoubllyLinkedList();
dll.push(
  "Shipping Lanes",
  1,
  "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3"
);
dll.push(
  "Enthusiast",
  2,
  "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3"
);
dll.push(
  "Night Owl",
  3,
  "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3"
);

dll.setDefaulltPointer();
