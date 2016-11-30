var getIntersectionNode = function(headA, headB) {
    while (headA || headB) {
        if (headA) {
            if (headA.flag) return headA;
            headA.flag = true;
            headA = headA.next;
        }
        if (headB) {
            if (headB.flag) return headB;
            headB.flag = true;
            headB = headB.next;
        }
    }
    return null;
};

// RUNTIME: 132 ms
// PERCENTILE: 52
// Count: 001
