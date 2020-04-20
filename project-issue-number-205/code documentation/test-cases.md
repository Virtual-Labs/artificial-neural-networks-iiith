issue: allowing change in values after original generation
test steps:
1. generate graphs 
2. change dimensions 
3. generate graph again
expected output: no changes should be allowed 
actual output: new weights plotted on top of old weights
status: passed

issue: overshooting total iterations 
test steps:
1. set total iterations to 107 and iter step size to 10
2. generate graphs
3. keep clicking next iteration
expected output:  should ask user to reduce iter step size at 100 iterations
actual output: does 110 iterations instead of 107
status: passed
 



