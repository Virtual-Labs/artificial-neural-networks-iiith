Artificial Neural Networks Parallel and Distributed Processing -1: Interactive Activation and Competition model Code Documentation

Introduction

This document captures the experiment implementation details.

Code Details

File Name : pdp1_SRIP.js

File Description : This file contains all the code for implementation of the canvas and the buttons.

Function : setup() 

Function Description : make canvas and call functions for placing units and getting names and weights

Function : getWeights()

Function Description : getting weights from byte string between 68x68 units.

Function : getNames()

Function Description : getting names of the units

Function : draw()

Function Description : this is the main looping function which calls the plotting of gdelta and the displaying and updating functions of the simulator

Function : placeUnits()

Function Description : this gets the 'px' and 'py' position of all 68 units and puts them into position.

Function : plotgDelta()

Function Description : gets the values for plotting the g delta at the bottom of the simulator and plots it.

Function : display()

Function Description : displaying the units on the simulator and showing lines if there is highlight.

Function : net() 

Function Description : getting the net values for q, excitation and inhibition using the values from previous cycle.

Function : update()

Function Description : updating gDel using excitation and inhibition values changed due to net input. 

Function : UserIn()

Function Description : checks if the user has highlighted any unit, i.e. the mouse is hovering over the unit and giving ext input if it is clicked.

Function : reset()

Function Description : resets values of each unit to 0.0

Function : mouseReleased()

Function Description : checks when mouse is released to activate click.

Function : keyReleased()

Function Description : checks when a key has been pressed and accordingly activates functions neccessary.

Function : initReset()

Function Description : initializing the reset when new values are there.

Function : resetOriginalValues()

Function Description : resetting values to original values and calling initReset()

Function : setNewValues()

Function Description : setting new values and calling initReset().


Other details:

Formulas used in the Experiment:

if weights between i'th and j'th components is +ve,
q = weight * activation;
excitation += q for all units. 

if weights between i'th and j'th components is -ve,
q = weight * activation;
inhibition += q for all units.

net input = (estr * external input) + (beta * excitation) + (gamma * inhibition)

delta excitation = (actmax - activation) * net input - decay * (activation - actrest)
activation += delta excitation
g Delta = g Delta + absolute(delta excitation)

delta inhibition = (activation - actmin) * net input - decay * (activation - actrest);
activation += delta inhibition;
g Delta = g Delta + absolute(delta inhibiton);




