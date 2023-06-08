# Linked List
Singly Linked List that fetchs 5000 unique first names and populates the nodes with them.

# Set up
This project use dotenv for processing the api key. Download dotenv and add your own key to .env.

## features
-`populate()` Takes the data from the API and populates the linked list with values attached to the nodes.
-`append(node)` adds node at the end of the linked list.
-`prepend(node)` adds node at the beginning of the list and making it the head.
-`size()` returns the length of the list.
-`getHead()` returns the head node of the list.
-`getTail()` returns the last node in the list.
-`at(index)` returns the value at `index` from the list.
-`pop()` deletes the last node from the list.
-`contains(value)` returns true if the `value` is in the list, otherwise returns false.
-`find(value)` if `value` is in the list, it will return the index it was found at. Otherwise returns false.
-`toString()` prints out all the values in the linked list.

