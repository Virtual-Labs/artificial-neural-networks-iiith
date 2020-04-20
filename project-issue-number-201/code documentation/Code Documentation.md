Artificial Neural Networks Parallel and Distributed Processing -2: Constraint Satisfaction Neural Network model Code Documentation

Introduction

This document captures the experiment implementation details.

Code Details

File Name : pdp2.js

File Description : This file contains all the code for implementation of the canvas and the buttons.

Function : setup() 

Function Description : make canvas and call functions for setting clamping of descrriptors to false and getting names and weights

Function : setRooms() 

Function Description : set descriptors for further training to false.

Function : getWeights()

Function Description : getting weights from byte string between 68x68 units.

Function : setDescriptors()

Function Description : setting clamping of descriptors to false.

Function : draw()

Function Description : this is the main looping function which calls for the drawing of the stage according to the stage variable.

Function : drawStageOne()

Function Description : this is the home page showing descriptors and buttons for other two stages.

Function : drawStageTwoMain()

Function Description : this is the page for the showing options for hinton diagrams of the descriptors.

Function : drawStageTwoOne()

Function Description : this is the page for the showing of original hinton diagram of the descriptors.

Function : drawStageTwoTwo() 

Function Description : loads page for further training of model.

Function : validateTrainNetwork();

Function Description : check if a descriptor has been selected for each room type.

Function : drawStageTwoTwoOne() 

Function Description : initiates making of the hinton diagrams of further trained network.

Function : checkForHover()

Function Description : checks if mouse is hovering over any hinton diagram in order to show zoomed in version of it.

Function : setRoomDescriptor()

Function Description : sets descriptors for further training according to the room types.

Function : makeNewHinton()

Function Description : calculates the new weights in order to make new hinton diagram.

Function : makeHinton()

Function Description : makes the hinton diagrams for both old and new descriptor choices.

Function : getRoomChoice() 

Function Description : get room choice for further training according to mouse click

Function : drawStageThree()

Function Description : this is the page for the clamping of descriptors and showing their values cycle after cycle.

Function : testNetwork()

Function Description : if test network button is clicked, calculation and display functions trigger.

Function : clampDescriptor()

Function Description : clamps and unclamps descriptors based on clicking of a descriptor.

Function : displayTestedNetwork()

Function Description : once calculation of activation is done, display function runs to show the variation cycle after cycle.

Function : validateClampNetwork()

Function Description : checks if any descriptor is selected to be clamped.

Function : mouseReleased()

Function Description : checks for clicks and accordingly triggers different stages and clamping.


Other details:

Formulas used in the Experiment:

if descriptor is clamped, it is given activation 1, otherwise 0.
nextState[i] of a descriptor is the sum of the products of activation[j] with weights[i][j]
if nextState[i] is greater than the threshold, it is given value 1, otherwise 0.
if nextState[i] is 1, activation is set to 1 irrespective of it's initial value.
activation of each descriptor is calculated for 16 cycles one after another and displayed.




