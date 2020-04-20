issue: clicking allowed during paused simulator
test steps:
1. press spacebar.
2. click on unit.
3. press spacebar.
expected output: no change in inputs and activation. 
actual output: ext input given to clicked unit.
status: passed

issue: length of floating point numbers
status: fixed

issue: NaN error in global change
status: fixed

issue: allowing anything other than number in variable value field.
test steps:
1. enter alphabet in value field
2. click on set values and restart
expected output: alert asking to enter only number
actual output: error
status: passed

issue: allowing entering nothing in the variable value field.
test steps:
1. enter nothing in the value field
2. click on set values and restart
expected output: alert asking to enter something.
actual output: error
status: passed

issue: allowing numbers within a certain range.
test steps:
1. enter number out of range in the value field
2. click on set values and restart
expected output: alert asking to enter number in specified range.
actual output: unwanted changes in the simulator
status: passed
 



