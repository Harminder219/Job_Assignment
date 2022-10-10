package com.question1;

class Node {
	int data;
	Node next;

	public Node(int data) {
		this.data = data;
		this.next = null;
	}
}

public class Linkedlist {

	Node headNode = null;

	public Linkedlist() {

		headNode = new Node(1);
		headNode.next = new Node(2);
		headNode.next.next = headNode;

		/*
		 * (2nd test case) headNode=new Node(3); Node temp1=new Node(2);
		 * headNode.next=temp1; Node temp2=new Node(0); headNode.next.next=temp2; Node
		 * temp3=new Node(-4); headNode.next.next.next=temp3;
		 * headNode.next.next.next.next=temp1;
		 */

	}

	public boolean checkcycle() {
		Node slow = headNode;
		Node fast = headNode;
		boolean check = false;

		while (fast != null && fast.next != null) {
			slow = slow.next;
			fast = fast.next.next;

			if (slow == fast) {
				check = true;
				break;
			}
		}

		return check;
	}

}
