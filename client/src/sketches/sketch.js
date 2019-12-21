const sketch = p => {

    p.setup = () => {
        p.createCanvas(100, 100);
    };
    p.draw = () => {
        p.background(255);
        p.clear();
        p.fill(255, 0, 0);
        p.noStroke();
        p.ellipse(p.mouseX, p.mouseY, 10, 10);
    };
    p.mousePressed =()=> {
        p.clear();
    }
  };
  
  export default sketch;
  