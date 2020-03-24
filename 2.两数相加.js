var addTwoNumbers = function(l1, l2) {
  let listNode = new ListNode(0);
  let carr = listNode;
  let carry = 0;

  while (l1 || l2) {
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;
    let m =  carry + x + y;

    carry = m / 10;
    carr.next = new ListNode(Math.trunc(m % 10));
    carr = carr.next;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  let temp = Math.trunc(carry);
  
  if (temp > 0) {
    carr.next = new ListNode(temp);
  }
  return listNode.next;
};