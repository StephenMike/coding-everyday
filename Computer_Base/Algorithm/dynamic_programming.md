## 动态规划

### 01背包问题
```
dp[x][y]表示前x件物品，不超过重量y的时候的最大价值。
有两种可能：
（1）若选择x件物品，则前x-1件物品的重量不能超过y-w[x]。
（2）若不选择x件物品，则前x-1件物品的重量不能超过y。

所以dp[x][y]可能等于dp[x-1][y]，也就是不取第x件物品。也可能是dp[x-1][y-w[x]]+v[x]，二者取较大值。
```
```python
def bag(w, v, cap):
  n = len(w)
  dp = [[0 for i in range(cap + 1)] for j in range(n + 1)]
  for i in range(1, n + 1):
    for j in range(1, cap + 1):
      dp[i][j] = dp[i - 1][j]
      if j >= w[i -1] and dp[i-1][j-w[i-1]] + v[i-1] > dp[i-1][j]:
        dp[i][j] = dp[i-1][j-w[i-1]] + v[i-1]
  return dp[-1][-1]
```

### 最长公共子序列LCS
```
1. dp[i][j]的含义是字符串arr1[0...i]和arr2[0...j]的最长公共子序列。
2. 矩阵dp的第一列，即dp[i][0]，为arr1[0..j]和arr2[0]的最长公共子序列长度，
   由于arr2[0]长度为1，所以dp[i][0]最大为1。dp[i][0]一旦被设为1，那么之后的dp[i+1..M]都为1。
3. 同理，矩阵的第一行，dp[0][j]，也是相同的规律。
4. 若 arr1[i]==arr2[j]，则 dp[i][j]=dp[i-1][j-1]+1，否则 dp[i][j] = max(dp[i-1][j], dp[i][j-1])。
```
```python
def LCS(A, B):
  n = len(A)
  m = len(B)
  dp =[[0 for i in range(m)]for j in range(n)]
  dp[0][0] = 1 if A[0] == B[0] else 0
  for i in range(1, n):
    dp[i][0] = 1 if A[i] == B[0] else dp[i-1][0]
  for j in range(1, m):
    dp[0][j] = 1 if A[0] == B[j] else dp[0][j-1]
  for i in range(1, n):
    for j in range(1, m):
      if A[i] == B[j]:
        dp[i][j] = dp[i-1][j-1] + 1
      else:
        dp[i][j] = max(dp[i-1][j], dp[i][j-1])
  return dp[-1][-1]
```

### 最长上升子序列 LIS
```
dp[i]表示以arr[i]结尾的情况下，arr[0...i]中最大递增子序列长度。
dp[i]=max{ dp[j] + 1 }，其中 0<=j<i，并且 arr[j]<arr[i]
```
```python
def LIS(A):
  n = len(A)
  dp = [0 for i in range(n)]
  dp[0] = 1
  
  for i in range(1, n):
    temp = 0
    
    for j in range(i):
      if A[j] < A[i] and temp < dp[j]:
        temp = dp[j]
    dp[i] = temp + 1
    
  return max(dp) # 注意是取最大的，不是最后一个
```

### 找零钱问题
```
dp[i]是目标面值为i时，可以换钱的方法数。
dp[j] += dp[j - penny[i]]，比如，当 penny[i] 为5时，比5大的目标，都应该加上5 + (剩余的面值)的方法数。
```
```python
def exchange(penny, aim):
  n = len(penny)
  dp = [0 for i in range(aim + 1)]
  dp[0] = 1
  for i in range(n):
    j = penny[i]
    while j <= aim:
      dp[j] += dp[j - penny[i]]
      j += 1
  return dp[-1]
```