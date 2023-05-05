function solution(arr) {

    let dp = [];
    dp[arr.length - 1] = 0;
    for (let i = arr.length - 2; i >= 0; i--) {
        let val = arr[i];
        let move = Number.MAX_VALUE;
        for (let j = i + 1; j < arr.length && j <= i + val; j++) {
            if (dp[j] != -1 && dp[j] < move) {
                move = dp[j];
            }
        }
        if (move != Number.MAX_VALUE) {
            dp[i] = 1 + move;
        } else {
            dp[i] = -1;
        }

    }
    console.log("Minimum number of planes required : " + dp[0]);
}


solution([2, 1, 2, 3, 1]);
solution([1, 6, 3, 4, 5, 0, 0, 0, 6]);