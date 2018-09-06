function fibo(first, second, times, results = []) {
    results.push(first);
    const sum = first + second;
    if (times-- > 0) {
        fibo(second, sum, times, results);
    }
    return results;
}

const fiboSum = fibo(0,1,20);
console.log(fiboSum);