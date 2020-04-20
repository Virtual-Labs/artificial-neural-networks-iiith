int Radius=20;
Unit[] Units;
Units = new Unit[68];        
void setup()
{
    size(800,600);
    smooth();
    noStroke();
    background(100);


    //readNames();    
    //placeUnits();
}

void draw()
{
    background(100);
    smooth();
    noStroke();
    fill(153, 153, 136, 255);
    rect(0, 580, 800, 20);
    rect(0, 0, 800, 20);
    noSmooth();
    fill(255, 255, 255, 255);

    text("Interactive Activation v. 1.1 - click on units to activate, SPACE to pause, 'r' to reset", 10, 13);
    text("Cycle: ", 10, 595);
    
    text("Global Change: ", 100, 595);
    for(int i=0;i<68;i++)
    {
        Units[i].display();
    }
}

void readNames() {
    
  //String Names[] = loadStrings("names.txt");
  for (int i = 0; i < 68; i++) {
    //Units[i] = new Unit(i, Names[i], 20 + (i*60)%600, 20 + (i/10)*60);
    Units[i] = new Unit(i, "lol", 20, 20);
  }
}

void placeUnits() {
  int r = 60;
  int cx =180;
  int cy = 400;
  float len = 0;
  int i = numunits - 1;
  int j = 0;
  int n = 0;
  int interval = Radius + 20;
  int angle;

  System.out.println("67"+"----"+Units[67].name);

  while (i >= 42) {
    len = 2 * PI * r; //circumference of a circle with radius r
    n = int(len/interval); //# of units I can put on the circle
    for (j = 0; ((j < n) && (i >= 0)); j++, i--) {
      if ((i == 40) || (i == 13) || (i == 10) || (i == 7) || (i == 4) || (i == 1)) {
        j +=1;
      }

      angle = 270 + int(j * (360/n));
      Units[i].px = cx + int(cos(radians(angle)) * r);
      Units[i].py = cy + int(sin(radians(angle)) * r);
    }
    r += 60;
  }
  
  cx = 550;
  r = 60;

  System.out.println(i+"----"+Units[i].name);

    while (i >= 14) {
    len = 2 * PI * r; //circumference of a circle with radius r
    n = int(len/interval); //# of units I can put on the circle
   
    for (j = 0; ((j < n) && (i >= 0)); j++, i--) {
      if (i==13){//((i == 40) || (i == 13) || (i == 10) || (i == 7) || (i == 4) || (i == 1)) {
        j +=1;
      }

      angle = 270 + int(j * (360/n));
      Units[i].px = cx + int(cos(radians(angle)) * r);
      Units[i].py = cy + int(sin(radians(angle)) * r);
    }
    
    r += 60;
  }
  
      Units[0].px = 370; 
      Units[0].py = 310;
      Units[1].px = 370; 
      Units[1].py = 510;
      i = 13;

      for(int out=0;out<4;out+=1)
          {
            Units[i].px = 60+out*200; 
            Units[i].py = 180;
            Units[i-1].px = 30+out*200; 
            Units[i-1].py = 210;
            Units[i-2].px = 90+out*200; 
            Units[i-2].py = 210;
            i-=3;         
          }

}


class Unit{
    int id,px,py,rx,ry;
    boolean highlight;
    String name;
    Unit(int i, String s, int x, int y)
    {
        id=i;
        name=s;
        px=x;
        py=y;
        rx=Radius;
        ry=Radius;
    }
    void display()
    {
        fill(255,0,0,100);
        ellipse(px, py, rx+1, rx+2);        
    }

}












