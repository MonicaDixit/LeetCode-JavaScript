/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Iterative way
var reverseList = function(head) {
  if (head === null || head.next === null) { return head; }
  var headNext = head.next;
  head.next = null;
  while (head !== null && headNext !== null) {
    // keep a reference of the headNext's next node
    var tmp = headNext.next;
    headNext.next = head;
    head = headNext;
    headNext = tmp;
  }

  return head;
};

// recursive way
var reverseList = function(head) {
  if (head === null || head.next === null) { return head; }
  var headNext = head.next;
  head.next = null;
  var nextReversedListHead = reverseList(headNext);
  // now headNext is the last node of the reversed List on the right of head!!!
  headNext.next = head;

  return nextReversedListHead;
};