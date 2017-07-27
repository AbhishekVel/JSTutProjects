// understand how to reverse a linked list in javscript


(function main() {

    // use to create a new object
    function LinkedList() {
        this.head = null;

        this.Node = function Node(data) {
            this.data = data;
            this.next = null;
        }
    }

    LinkedList.prototype.addNode = function(newNode) {
        if (!this.head) {
            this.head = newNode;
            return;
        }
        var curr = this.head;
        while (curr.next != null) { curr = curr.next; }
        curr.next = newNode;
    };

    LinkedList.prototype.removeNode = function(delVal) {
         var curr = this.head, prev = null;
         
         while (curr && curr.data !== delVal) {
             prev = curr;
             curr = curr.next;
         }
         // if curr is null, then delVal wasnt found
         if (curr) {
             if (prev) {prev.next = curr.next;}
             else {this.head = this.head.next;}
         }
    };

    LinkedList.prototype.printList = function() {
        var curr = this.head;
        var printval = '';

        while (curr) {
            printval += curr.data + ", ";
            curr = curr.next;
        }
        console.log(printval + "\n");
    };



    var list = new LinkedList();
    list.addNode(new list.Node(5));
    list.addNode(new list.Node(3));
    list.addNode(new list.Node(8));
    list.printList();
    list.removeNode(5);
    list.printList();

}());





