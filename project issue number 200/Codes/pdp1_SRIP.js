let isRunning = true;
let units = [];
//let nameList = [];
//let actrest = -0.1;
let nameList = [
  "Jets",
  "Sharks",
  "in20s",
  "in30s",
  "in40s",
  "JH",
  "HS",
  "College",
  "Single",
  "Married",
  "Divorced",
  "Pusher",
  "Burglar",
  "Bookie",
  "Art",
  "Al",
  "Sam",
  "Clyde",
  "Mike",
  "Jim",
  "Greg",
  "John",
  "Doug",
  "Lance",
  "George",
  "Pete",
  "Fred",
  "Gene",
  "Ralph",
  "Phil",
  "Ike",
  "Nick",
  "Don",
  "Ned",
  "Karl",
  "Ken",
  "Earl",
  "Rick",
  "Ol",
  "Neal",
  "Dave",
  "Art'",
  "Al'",
  "Sam'",
  "Clyde'",
  "Mike'",
  "Jim'",
  "Greg'",
  "John'",
  "Doug'",
  "Lance'",
  "George'",
  "Pete'",
  "Fred'",
  "Gene'",
  "Ralph'",
  "Phil'",
  "Ike'",
  "Nick'",
  "Don'",
  "Ned'",
  "Karl'",
  "Ken'",
  "Earl'",
  "Rick'",
  "Ol'",
  "Neal'",
  "Dave'",
];
let weights = [];
let decay = 0.1;
let beta = 0.1;
let gamma = 0.1;
let estr = 0.4;
let actmax = 1.0;
let actmin = -1.0;
let actrest = -0.1;
let difx, dify;
let slowmo = false;
let click = false;
let wx = ".v.......................................ddddddddddddddd............ v.......................................................dddddddddddd ...vv......................................d..ddd.ddddd.......d..... ..v.v.....................................d..d...d.....dddddd...dddd ..vv.....................................d..d................d.d.... ......vv.................................dd.ddd.d.dd...d.d.......... .....v.v.......................................d.d..dd....d..dddd.dd .....vv....................................d..........d.d..dd....d.. .........vv..............................d.ddd...d..dddd.dd...d...d. ........v.v...............................d....dd.d.....d..ddd.d.d.. ........vv....................................d....d............d..d ............vv...........................d.....d.....dddd.d......d.d ...........v.v............................d...d.d.dd.......d..ddd... ...........vv..............................ddd...d..d....d..dd....d. ...............vvvvvvvvvvvvvvvvvvvvvvvvvvd.......................... ..............v.vvvvvvvvvvvvvvvvvvvvvvvvv.d......................... ..............vv.vvvvvvvvvvvvvvvvvvvvvvvv..d........................ ..............vvv.vvvvvvvvvvvvvvvvvvvvvvv...d....................... ..............vvvv.vvvvvvvvvvvvvvvvvvvvvv....d...................... ..............vvvvv.vvvvvvvvvvvvvvvvvvvvv.....d..................... ..............vvvvvv.vvvvvvvvvvvvvvvvvvvv......d.................... ..............vvvvvvv.vvvvvvvvvvvvvvvvvvv.......d................... ..............vvvvvvvv.vvvvvvvvvvvvvvvvvv........d.................. ..............vvvvvvvvv.vvvvvvvvvvvvvvvvv.........d................. ..............vvvvvvvvvv.vvvvvvvvvvvvvvvv..........d................ ..............vvvvvvvvvvv.vvvvvvvvvvvvvvv...........d............... ..............vvvvvvvvvvvv.vvvvvvvvvvvvvv............d.............. ..............vvvvvvvvvvvvv.vvvvvvvvvvvvv.............d............. ..............vvvvvvvvvvvvvv.vvvvvvvvvvvv..............d............ ..............vvvvvvvvvvvvvvv.vvvvvvvvvvv...............d........... ..............vvvvvvvvvvvvvvvv.vvvvvvvvvv................d.......... ..............vvvvvvvvvvvvvvvvv.vvvvvvvvv.................d......... ..............vvvvvvvvvvvvvvvvvv.vvvvvvvv..................d........ ..............vvvvvvvvvvvvvvvvvvv.vvvvvvv...................d....... ..............vvvvvvvvvvvvvvvvvvvv.vvvvvv....................d...... ..............vvvvvvvvvvvvvvvvvvvvv.vvvvv.....................d..... ..............vvvvvvvvvvvvvvvvvvvvvv.vvvv......................d.... ..............vvvvvvvvvvvvvvvvvvvvvvv.vvv.......................d... ..............vvvvvvvvvvvvvvvvvvvvvvvv.vv........................d.. ..............vvvvvvvvvvvvvvvvvvvvvvvvv.v.........................d. ..............vvvvvvvvvvvvvvvvvvvvvvvvvv...........................d u...uu..u..u..u...........................hhhhhhhhhhhhhhhhhhhhhhhhhh u..u.u...u..u..u.........................h.hhhhhhhhhhhhhhhhhhhhhhhhh u.u....uu....u..u........................hh.hhhhhhhhhhhhhhhhhhhhhhhh u...uu..u....u...u.......................hhh.hhhhhhhhhhhhhhhhhhhhhhh u..u.u..u....u....u......................hhhh.hhhhhhhhhhhhhhhhhhhhhh u.u..u....u.u......u.....................hhhhh.hhhhhhhhhhhhhhhhhhhhh u.u...u..u.u........u....................hhhhhh.hhhhhhhhhhhhhhhhhhhh u.u..u...u..u........u...................hhhhhhh.hhhhhhhhhhhhhhhhhhh u..u..u.u....u........u..................hhhhhhhh.hhhhhhhhhhhhhhhhhh u.u..u...u..u..........u.................hhhhhhhhh.hhhhhhhhhhhhhhhhh u.u..u....u.u...........u................hhhhhhhhhh.hhhhhhhhhhhhhhhh u.u...u.u....u...........u...............hhhhhhhhhhh.hhhhhhhhhhhhhhh u.u...u.u..u..............u..............hhhhhhhhhhhh.hhhhhhhhhhhhhh u.u....uu..u...............u.............hhhhhhhhhhhhh.hhhhhhhhhhhhh u..u.u..u..u................u............hhhhhhhhhhhhhh.hhhhhhhhhhhh .u.u...u.u.u.................u...........hhhhhhhhhhhhhhh.hhhhhhhhhhh .u.u.u..u....u................u..........hhhhhhhhhhhhhhhh.hhhhhhhhhh .u.u..u.u..u...................u.........hhhhhhhhhhhhhhhhh.hhhhhhhhh .u.u...u.u..u...................u........hhhhhhhhhhhhhhhhhh.hhhhhhhh .u.u...u.u...u...................u.......hhhhhhhhhhhhhhhhhhh.hhhhhhh .u..u.u..u...u....................u......hhhhhhhhhhhhhhhhhhhh.hhhhhh .uu...u.u...u......................u.....hhhhhhhhhhhhhhhhhhhhh.hhhhh .u..u.u..u..u.......................u....hhhhhhhhhhhhhhhhhhhhhh.hhhh .u.u..u...u.u........................u...hhhhhhhhhhhhhhhhhhhhhhh.hhh .u.u...u.u.u..........................u..hhhhhhhhhhhhhhhhhhhhhhhh.hh .u.u..u.u....u.........................u.hhhhhhhhhhhhhhhhhhhhhhhhh.h .u.u..u...uu............................uhhhhhhhhhhhhhhhhhhhhhhhhhh.";
let maxSteps = 350;
let prev = [];
let gDel = 0.0;
let maxGDel = 0.001;
let cycle = 0;
let inpnew;
//function preload() {
//  nameList = loadStrings('data/names.txt');
//  w = loadBytes('data/network.txt');
//}
function getWeights() {
  for (let i = 0; i < 68; i++) {
    weights[i] = [];
    for (let j = 0; j < 68; j++) {

      let a = wx[i * 69 + j];
      if (a === ".") {
        weights[i][j] = 0.0;
      }
      else if ((a === "h") || (a === "v")) {
        weights[i][j] = -1.0;
      }
      else if ((a === "d") || (a === "u")) {
        weights[i][j] = 1.0;
      }

    }
  }
}

function placeUnits() {
  let r = 60;
  let cx = 180;
  let cy = 400;
  let len = 0.0;
  let i = 67;
  let j = 0;
  let n = 0;
  let interval = 40;
  let angle;
  let PI = 3.14;
  //System.out.println("67"+"----"+Units[67].name);

  while (i >= 42) {
    len = 2 * PI * r; //circumference of a circle with radius r
    n = int(len / interval); //# of units I can put on the circle
    for (j = 0; ((j < n) && (i >= 0)); j++ , i--) {
      if ((i === 40) || (i === 13) || (i === 10) || (i === 7) || (i === 4) || (i === 1)) {
        j += 1;
      }

      angle = 270 + int(j * (360 / n));
      units[i].px = cx + int(cos(radians(angle)) * r);
      units[i].py = cy + int(sin(radians(angle)) * r);
    }
    r += 60;
  }

  cx = 550;
  r = 60;

  //System.out.println(i+"----"+Units[i].name);

  while (i >= 14) {
    len = 2 * PI * r; //circumference of a circle with radius r
    n = int(len / interval); //# of units I can put on the circle

    for (j = 0; ((j < n) && (i >= 0)); j++ , i--) {
      if (i == 13) {//((i == 40) || (i == 13) || (i == 10) || (i == 7) || (i == 4) || (i == 1)) {
        j += 1;
      }

      angle = 270 + int(j * (360 / n));
      units[i].px = cx + int(cos(radians(angle)) * r);
      units[i].py = cy + int(sin(radians(angle)) * r);
    }

    r += 60;
  }

  units[0].px = 370;
  units[0].py = 310;
  units[1].px = 370;
  units[1].py = 510;
  i = 13;

  for (let out = 0; out < 4; out += 1) {
    units[i].px = 60 + out * 200;
    units[i].py = 180;
    units[i - 1].px = 30 + out * 200;
    units[i - 1].py = 210;
    units[i - 2].px = 90 + out * 200;
    units[i - 2].py = 210;
    i -= 3;
  }

}

function plotgDelta() {
  let c = cycle;
  if (isRunning) {
    if (c > maxSteps - 1) {
      c = maxSteps - 1;
      for (let i = 0; i < maxSteps - 1; i++) {
        prev[i] = prev[i + 1];
      }
    }
    //rescale
    if (gDel > maxGDel) {
      maxGDel = gDel;
    }
    prev[c] = gDel;
  }
  stroke(0, 255, 0, 255);
  for (let i = 0; i < maxSteps - 1; i++) {
    line(280 + i, 595, 280 + i, (594 - (12 * (prev[i] / maxGDel))));
  }
}
class Unit {

  constructor(id, name, px, py) {
    this.id = id;
    this.name = name;
    this.px = px;
    this.py = py;
    this.rx = 20;
    this.ry = 20;
    this.extIn = 0.0;
    this.q = this.delEx = this.delInh = this.netIn = this.inhibition = this.excitation = 0.0;
    this.activation = actrest;
    this.highlight = false;

  }

  display() {
    noStroke();
    if (this.extIn > 0) {
      //stroke(255, 255, 255);
      fill(0, 255, 0, 255);
    }
    else if (this.extIn < 0) {
      //stroke(255, 0, 0);
      fill(255, 0, 0, 255);
    }
    else {
      fill(0, 0, 0, 0);
      //noStroke();
    }
    ellipse(this.px, this.py, this.rx + 2, this.ry + 2);
    if (this.delEx > 0) {
      fill(0, 255, 0, 100);
      ellipse(this.px, this.py, 2000 * this.delEx, 2000 * this.delEx);
    }
    else if (this.delInh < 0) {
      fill(255, 0, 0, 100);
      ellipse(this.px, this.py, 2000 * abs(this.delInh), 2000 * abs(this.delInh));
    }

    if (this.highlight) {
      fill(255, 255, 255, 200);
      ellipse(this.px, this.py, this.rx, this.ry); //highlight the unit itself

      stroke(255, 255, 255, 255);
      fill(0, 0, 0, 0);
      rect(20, 60, 112, 19);
      if (this.activation > 0) {
        fill(0, 255, 0, 128 * this.activation);
      } else if (this.activation < 0) {
        fill(255, 0, 0, 128 * abs(this.activation));
      }
      rect(20, 79, 112, 19);

      //line(20, 80, 142, 80);
      //line(20, 100, 142, 100);
      if (this.netIn > 0) {
        fill(0, 255, 0, 255 * this.netIn);
      } else if (this.netIn < 0) {
        fill(255, 0, 0, 255 * abs(this.netIn));
      } else {
        fill(0, 0, 0, 0);
      }
      rect(20, 98, 112, 19);

      // noStroke();
      // rect(20, 80, 120, 20);
      stroke(255, 255, 255, 255);
      fill(255, 255, 255, 255);
      noSmooth();
      text("Unit no.", 25, 74);
      text(this.id, 90, 74);
      text("Activation: ", 25, 93);
      text("Net Input: ", 25, 112);
      text(this.name, 139, 74);
      text(this.activation.toFixed(4), 139, 93);
      text(this.netIn.toFixed(4), 139, 112);
      smooth();

    } else {
      fill(255, 153, 0, 80);
      ellipse(this.px, this.py, this.rx, this.ry);
    }
    if (this.activation > 0) {
      fill(255, 204, 0, 255);
    }
    else if (this.activation < 0) {
      fill(255, 0, 0, 255);
    }
    noStroke();
    ellipse(this.px, this.py, abs(this.activation) * this.rx, abs(this.activation) * this.ry);
    fill(255, 255, 255, 255);
    noSmooth();
    text(this.name, this.px, this.py + 20);
    smooth();
    if (this.highlight) {
      for (let j = 0; j < 68; j++) {
        if (weights[this.id][j] > 0) {
          strokeWeight(1);
          stroke(0, 255, 100, 255);
          //curve(posx, posy, 200, 200, 200, 200, Units[j].posx, Units[j].posy);
          line(this.px, this.py, units[j].px, units[j].py);
          strokeWeight(1);
        }
        else if (weights[this.id][j] < 0) {
          strokeWeight(1);
          stroke(255, 0, 100, 255);
          //curve(posx, posy, 200, 200, 200, 200, Units[j].posx, Units[j].posy);
          line(this.px, this.py, units[j].px, units[j].py);
          strokeWeight(1);
        }
      }
    }

  }
  net() {
    this.inhibition = this.excitation = 0.0;
    for (let j = 0; j < 68; j++) {
      if (units[j].activation > 0) {
        if (weights[this.id][j] > 0) {
          this.q = weights[this.id][j] * units[j].activation;
          this.excitation += this.q;
          if (units[j].activation > 0.65) {
            stroke(0, 255, 0, this.q * 200);
            //curve(posx, posy, 200, 200, 200, 200, Units[j].posx, Units[j].posy);
            line(this.px, this.py, units[j].px, units[j].py);

          }

        }
        else if (weights[this.id][j] < 0) {
          this.q = weights[this.id][j] * units[j].activation;
          this.inhibition += this.q;
          //stroke(255, 0, 0, abs(this.q)*200);
          //curve(posx, posy, 200, 200, 200, 200, Units[j].posx, Units[j].posy);
          //line(this.px, this.py, units[j].px, units[j].py);
        }
      }

      //if (i == 60) {println(netinput);}
    }
    this.netIn = (estr * this.extIn) + (beta * this.excitation) + (gamma * this.inhibition);
  }
  update() {
    gDel = 0.0;
    if (this.netIn > 0) {
      this.delEx = (actmax - this.activation) * this.netIn - decay * (this.activation - actrest);
      this.activation += this.delEx;
      gDel = gDel + abs(this.delEx);
      //parseFloat(gDel);
    }
    else if (this.netIn < 0) {
      this.delInh = (this.activation - actmin) * this.netIn - decay * (this.activation - actrest);
      this.activation += this.delInh;
      gDel = gDel + abs(this.delInh);
      //parseFloat(gDel);
    }
    if (this.activation > actmax) { this.activation = actmax; }
    if (this.activation < actmin) { this.activation = actmin; }
  }
  userIn() {
    difx = this.px - mouseX;
    dify = this.py - mouseY;
    if (sqrt(sq(difx) + sq(dify)) < 10) {
      this.highlight = true;
      if (this.id < 41 && click === true) {
        if (this.extIn == 0.0) { this.extIn = 1.0; }
        else { this.extIn = 0.0; }
        click = false;
      }
      else {
        click = false;
      }
    }
    else {
      this.highlight = false;
    }
  }
  reset() {
    this.extIn = 0.0;
    this.q = this.delEx = this.delInh = this.netIn = this.inhibition = this.excitation = 0.0;
    this.activation = actrest;
    this.highlight = false;
  }
}

function mouseReleased() {
  if (isRunning) {
    for (let i = 0; i < 68; i++) {
      if (units[i].highlight == true) {
        click = true;
        break;
      }
    }

  }

}



function keyReleased() {
  if (key === ' ') {
    if (isRunning === true) { isRunning = false; }
    else { isRunning = true; }
  }
  else if (key === 'r') {
    initReset();
  }
  else if (key === 's') {
    if (slowmo === true) { slowmo = false; }
    else { slowmo = true; }
  }
}

function initReset() {
  for (let i = 0; i < 68; i++) {
    units[i].reset();
  }
  cycle = 0;
  click = false;
  slowmo = false;
}

function resetOriginalValues() {
  decay = 0.1;
  beta = 0.1;
  gamma = 0.1;
  estr = 0.4;
  actmax = 1.0;
  actmin = -1.0;
  actrest = -0.1;
  select("#decay_inp").html('0.1');
  select("#beta_inp").html('0.1');
  select("#gamma_inp").html('0.1');
  initReset();
}

function getNames() {
  //console.log('[')
  for (let i = 0; i < 68; i++) {
    //console.log('"'+nameList[i]+'",');
    units[i] = new Unit(i, nameList[i], 20, 20);
  }

}

function setNewValues() {
  if (select("#estr_inp").value() == '' || select("#actmax_inp").value() == '' || select("#actmin_inp").value() == '' || select("#actrest_inp").value() == '' || select("#decay_inp").value() == '' || select("#beta_inp").value() == '' || select("#gamma_inp").value() == '') {
    alert("no value entered");
  }
  else if (isNaN(select("#estr_inp").value()) || isNaN(select("#actmax_inp").value()) || isNaN(select("#actmin_inp").value()) || isNaN(select("#actrest_inp").value()) || isNaN(select("#decay_inp").value()) || isNaN(select("#beta_inp").value()) || isNaN(select("#gamma_inp").value())) {
    alert("please enter a number");
  }
  else if (float(select("#decay_inp").value()) > 0.6 || float(select("#decay_inp").value()) < -0.4) {
    alert("decay must be between -0.4 and 0.6");
  }
  else if (float(select("#beta_inp").value()) > 0.6 || float(select("#beta_inp").value()) < -0.4) {
    alert("beta must be between -0.4 and 0.6");
  }
  else if (float(select("#gamma_inp").value()) > 0.6 || float(select("#gamma_inp").value()) < -0.4) {
    alert("gamma must be between -0.4 and 0.6");
  }
  else if (float(select("#actmax_inp").value()) > 1.5 || float(select("#actmax_inp").value()) < 0.5) {
    alert("actmax must be between 0.5 and 1.5");
  }
  else if (float(select("#actmin_inp").value()) > -0.5 || float(select("#actmin_inp").value()) < -1.5) {
    alert("actmin must be between -0.5 and 1.5");
  }
  else if (float(select("#actrest_inp").value()) > 0 || float(select("#actrest_inp").value()) < -1) {
    alert("beta must be between -1 and 0");
  }
  else if (float(select("#estr_inp").value()) > 0.9 || float(select("#estr_inp").value()) < -0.1) {
    alert("estr must be between -0.4 and 0.6");
  }
  else {
    decay = float(select("#decay_inp").value());
    beta = float(select("#beta_inp").value());
    gamma = float(select("#gamma_inp").value());
    estr = float(select("#estr_inp").value());
    actmax = float(select("#actmax_inp").value());
    actmin = float(select("#actmin_inp").value());
    actrest = float(select("#actrest_inp").value());
    initReset();
  }
}

function setup() {
  var forPosn = createCanvas(800, 600);
  //for_posn.position(windowWidth*0.07-20,windowHeight*0.2+50);
  forPosn.parent("flex-container");
  smooth();
  noStroke();
  background(100);
  getNames();
  getWeights();
  placeUnits();
  //console.log(windowHeight);
}


function draw() {
  background(100);
  smooth();
  noStroke();
  fill(153, 153, 136, 255);
  rect(0, 580, 800, 20);
  rect(0, 0, 800, 20);
  noSmooth();
  fill(255, 255, 255, 255);

  text("Interactive Activation and Competition - click on units to activate, SPACE to pause, 'r' to reset, 's' for slow motion view", 10, 13);
  text("Cycle: ", 10, 595);
  text(cycle, 50, 595);
  text("Global Change: ", 100, 595);
  if ((gDel < 1e-4) && (gDel > 0)) {
    fill(0, 255, 0, 255);
  } else {
    fill(255, 255, 255, 255);
  }

  text(gDel.toFixed(6), 190, 595);
  //console.log(gDel);
  smooth();

  plotgDelta();
  if (slowmo) {
    for (let i = 0; i < 5e7; i++) {

    }
  }

  for (let i = 0; i < 68; i++) {
    units[i].display();
  }
  if (isRunning) {
    for (let i = 0; i < 68; i++) {
      units[i].net();
    }
    //gDel=0.0;
    for (let i = 0; i < 68; i++) {
      units[i].update();
    }
    cycle++;
  }
  for (let i = 0; i < 68; i++) {
    units[i].userIn();
  }

}