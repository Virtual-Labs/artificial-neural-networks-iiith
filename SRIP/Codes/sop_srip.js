//console.log("whaaaat!");
let tau0 = 1.0;
let tauT = tau0;
let currentCityIndex =1;
let currentIterationIndex =1;
let pi=3.14159;
let numCities;
let numNodes;
let numIterations;
let cityStep;
let iterStep;
let cityData=[];
cityData[0]=[];
cityData[1]=[];
let weights=[];
weights[0]=[];
weights[1]=[];
weights[2]=[];
weights[3]=[];

function setValues()
{
     numCities=parseInt(document.getElementById("numCities").value);
     numNodes=parseInt(document.getElementById("numNodes").value);
     numIterations=parseInt(document.getElementById("numIter").value);
     cityStep=parseInt(document.getElementById("cityStep").value);
     iterStep=parseInt(document.getElementById("iterStep").value);     
//    console.log(isNaN(i));
}

function setData()
{
    for(let i=0;i<numCities;i++)
    {
        cityData[0][i]=Math.random();
        cityData[1][i]=Math.random();
    }
}

function setWeights()
{
    let r=[];
    let theta=[];
    for(let i=0;i<numNodes;i++)
    {
        r=1.0;
        theta=(pi/(numNodes-1)) + 2*pi*(i)/(numNodes-1);
        let x= r * Math.cos(theta);
        let y= r * Math.sin(theta);
        weights[0][i]=x;
        weights[1][i]=y;
        weights[2][i]=Math.random();
        weights[3][i]=Math.random();
    }
}

function plotData()
{
    let drawdata = {
        x: cityData[0],
        y: cityData[1],
        mode: 'markers',
        type: 'scatter',
        hoverinfo: 'skip',
        marker: {
            size: 10,
            symbol: "star-open",
            color: "blue"
        }
    };
    let layout = {
        xaxis: {
            range: [-0.1, 1.1],
            title: "x-coordinate of city location"
        },
        yaxis: {
            range: [-0.1, 1.1],
            title: "y-coordinate of city location"
        },
        title: "Coordinates of cities",
        width: 400,
        height: 400

        //xlabel:"X-coordinate of data",
        //ylabel:"Y-coordinate of data"
    };

    var data = [drawdata];

    Plotly.newPlot('city-coordinates', data, layout);
}

function plotWeights(){
    let i;
    let weightTemp1=[];
    weightTemp1[0]=[];
    weightTemp1[1]=[];
    weightTemp1[2]=[];
    weightTemp1[3]=[];
    for(i=0;i<numNodes;i++)
    {
        weightTemp1[0][i]=weights[0][i];
        weightTemp1[1][i]=weights[1][i];
        weightTemp1[2][i]=weights[2][i];
        weightTemp1[3][i]=weights[3][i];
    }
    weightTemp1[0][i]=0;
        weightTemp1[1][i]=0;
        weightTemp1[2][i]=weights[2][0];
        weightTemp1[3][i]=weights[3][0];
    let drawWeight = {
        x: weightTemp1[2],
        y: weightTemp1[3],
        mode: 'markers',
        type: 'scatter',
        hoverinfo: 'skip',
        marker: {
            size: 4,
            symbol: "circle",
            color: "black"
        }
    };
    let layout = {
        xaxis: {
            range: [-0.1, 1.1],
            title: "w_1"
        },
        yaxis: {
            range: [-0.1, 1.1],
            title: "w_2"
        },
        title: "Weight vectors coordinates of nodes",
        width: 400,
        height: 400

        //xlabel:"X-coordinate of data",
        //ylabel:"Y-coordinate of data"
    };

    var data = [drawWeight];

    Plotly.newPlot('weight-coordinates', data, layout);
}



function initSOM()
{
//    console.log("wut");
    setValues();
    setData();
    setWeights();
    plotData();
    plotWeights();
}