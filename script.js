function mincost(arr) {
    // Create a min-heap using a priority queue
    let heap = [...arr];
    heap.sort((a, b) => a - b); // sort in ascending order

    let cost = 0;

    while (heap.length > 1) {
        // Remove the two smallest ropes
        let first = heap.shift();
        let second = heap.shift();

        // Add the cost of connecting them
        let newRope = first + second;
        cost += newRope;

        // Insert the new rope back in the heap and keep it sorted
        heap.push(newRope);
        heap.sort((a, b) => a - b);
    }

    return cost;
}

