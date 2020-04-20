Artificial Neural Networks Competitive Learning Neural Network model Code Documentation

Introduction

This document captures the experiment implementation details.

Code Details

File Name : clnn_srip.js

File Description : This file contains all the code for implementation of the canvas and the buttons.

Function : divMax() 

Function Description : divides the data value by the max data value. 

Function : setSquareData() 

Function Description : sets data for region type->square.

Function : setCircleData()

Function Description : sets data for region type->circle.

Function : setTriangleData()

Function Description : sets data for region type->triangle.

Function : setData()

Function Description : calls required data functio depending on region.

Function : plotDataDist()

Function Description : plots data distribution graph.

Function : setWeights()

Function Description : sets weights according to K.

Function : setIndices()

Function Description : sets indices for getting position of each weight.

Function : plotWeightDist() 

Function Description : plots weight distribution graph.

Function : calcWeightDist()

Function Description : determines connections.

Function : setVariableValues() 

Function Description : validates and sets variable values.

Function : disableVariableFields()

Function Description : disables the variable fields required on graph generation.

Function : generateData()

Function Description : calls the neccesary functions for data and graphs.

Function : getLatestIterStep()

Function Description : gets the latest iteration step if changed.

Function : nextIteration()

Function Description : calculates new weight for new iterations.

Other details:

Formulas used in the Experiment:

j is an index from 0 to number of data selected at random.

distance[i]=weights[i]-data[j]

winning neuron is found by finding neuron with 
minimum distance=mindist
index=mindistind

ri=index[mindistind]
newdist[i] = 1/(sqrt(2*piConst)*sigT).*exp( sum(( (index -  ri, K,1)) .^2) ,2)/(-2*sigT)) * etaT
where sigT=sigma 
      etaT=learning rate

weights[i]=weights[i]+newdist[i]*(data[i]-weights[i])

At the end of each iteration,
sigT = sig0*exp(-i/tau1);
etaT = eta0*exp(-i/tau2);
