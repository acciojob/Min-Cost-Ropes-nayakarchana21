function mincost(arr) {
  // Step 1: Create a min-heap (priority queue)
  let heap = [...arr];
  heap.sort((a, b) => a - b); // Min-heap using array sorting

  let cost = 0;

  // Step 2: Keep combining the two smallest ropes until one rope remains
  while (heap.length > 1) {
    let first = heap.shift(); // smallest
    let second = heap.shift(); // second smallest
    let sum = first + second;
    cost += sum;

    // Insert back the combined rope and keep the heap sorted
    heap.push(sum);
    heap.sort((a, b) => a - b);
  }

  return cost;
}

