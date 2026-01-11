# 🔗 Singly Linked List (JavaScript)

> A lightweight, dependency-free implementation of the **Singly Linked List** data structure in JavaScript.


![Structure](https://img.shields.io/badge/Data_Structure-Linked_List-blue?style=flat-square)

## 📖 Introduction

A **Linked List** is a linear data structure where elements are not stored at contiguous memory locations. Instead, the elements are linked using pointers.

This repository provides a complete `LinkedList` class solution including common operations like appending, prepending, removing, and advanced features like bulk insertion at a specific index.

### Structure Visualization

```text
[ HEAD ]             [ NODE ]             [ NODE ]             [ TAIL ]
+------+------+      +------+------+      +------+------+      +------+------+
| Data | Next | ---> | Data | Next | ---> | Data | Next | ---> | Data | null |
+------+------+      +------+------+      +------+------+      +------+------+

🚀 Features

    Core Operations: append, prepend, pop, removeAt.

    Data Access: head, tail, at, contains.

    Advanced:

        insertAt(index, ...values): Supports Bulk Insertion (inserting an array of items at once).

        toString(): Visualizes the list format as ( A ) -> ( B ) -> ....

    Safety: Includes bound checks and error handling for empty lists.

📚 API Documentation
1. Class Node

Represents a single element in the list.
Property	Type	Description
data	Any	The value stored in the node.
next	Node	null
2. Class LinkedList
🔹 Manipulation Methods
Method	Parameters	Description
append(data)	data: Any	Adds a new node to the end of the list.
prepend(data)	data: Any	Adds a new node to the start of the list.
insertAt(index, ...values)	

index: Number

...values: Any[]
	

Inserts one or multiple nodes at the specified index.

(Supports Spread Operator).
pop() Removes the first node (Head) and returns it.
removeAt(index)	index: Number	Removes the node at the specified index.
🔹 Access & Query Methods
Method	Return Type	Description
size()	Number	Returns the total number of nodes in the list.
head()	Any	Returns the value of the first node (after root).
tail()	Any	Returns the value of the last node.
at(index)	Any	Returns the data at the specified index.
checkBlank()	Boolean	Returns true if the list is empty, otherwise false.
contains(value)	Boolean	Checks if a specific value exists in the list.
findIndex(value)	Number	Returns the index of the first occurrence of value (or -1 if not found).
🔹 Utility Methods
Method	Return Type	Description
toString()	String	

Returns a string representation of the list.

Example: ( Dog ) -> ( Cat ) -> null
💡 Logic Explanation: insertAt

The insertAt method is designed to handle multiple arguments, allowing you to convert an array of inputs into a sub-linked list and splice it into the main list.

Scenario: Insert [2, 3] into Index 1 of List 1 -> 4.
Plaintext

Step 1: Original List     ( 1 ) ---------> ( 4 )
                                ^ Insert Here

Step 2: Create Sub-list   ( 2 ) -> ( 3 )

Step 3: Rewire Links      ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 )