//fibonacci of n
function fibonacci(n) {
    if (n == 1 || n == 0) {
        return n
    }
    let num = fibonacci(n -1) + fibonacci (n -2);
    console.log(num)
}

fibonacci(5)