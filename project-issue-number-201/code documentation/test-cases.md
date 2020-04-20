issue: allowing training network without all descriptors being selected
test steps:
1. click on kitchen
2. click on any descriptor
3. click on train network and show hinton diagram
expected output: alert asking to select descriptors from all 3 rooms 
actual output: untrained network hinton diagram
status: passed

issue: allowing test network without clamping any descriptors
test steps:
1. click on "click here for clamping descriptors"
2. click on test network
expected output: alert 
actual output: shows untrained network
status: passed
 



