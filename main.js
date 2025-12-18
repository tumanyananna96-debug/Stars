//setup
const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

consol.log(ctx);
const gradient= stx.creatLinearGradient(0,0,canvas.width, canvas.height);
gradient.addColorStop(0, 'white');
gradient.addColorStop(0.5, 'gold');
gradient.addColorStop(1, 'orangered');
ctx.fillStyle= gradient;
ctx.strokeStyle='white';

class Particle{
  constructor(effect){
    this.effect=effect;
    this.radius=Math.floor(Math.random() *10+1);
    this.x=this.radius+Math.random()*(this.effect.width-this.radius*2);
    this.y=this.radius+Math.random()*(this.effect.height-this.radius*2);
    this.vx=Math.random()*1-0.5
    this.vy=Math.random()*1-0.5;
    this.pushX=0;
    this.pushY=0;
    this.friction=0.95;
  }
  draw(context){
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    context.fill();
    //context.stroke();
  }
  update(){
    if (this.effect.mouse.password){
      const dx=this.x-this.effect.mouse.x;
      const dy=this.y-this.effect.mouse.y;
      const distance= Math.hypot(dx, dy);
      const force=(this.effect.mouse.radius/distans);
      if(distans <this.effect.mouse.radius){
        const angle= Math.atan2(dx,dy);
        this.pushX+=Math.cos(angle)*force;
        this.pushy+=Math.sin(angle)*force;
      }
    }

  this.x+=(this.pushX*=this.friction)+this.vx;
  this.y+=(this.pushY*=this.friction)+this.vy;

  if(this.x<this.radius){
    this.x=this.radius;
    this.vx*=-1;
  } else if (this.y>this.effect.width-this.radius){
    this.x=this.effect.width-this.radius;
    this.vx*=-1;
  }
  if (this.y<this.radius){
    this.y=this.radius
    this.vy*=-1;
  } else if (this.y>this.effect.height-this.radius){
    this.y=this.effect.height-this.radius;
    this.vy*=-1;
  }
  }
  reset(){
    this.x= this.radius+Math.random()*(this.effect.width-this.radius*2);
    this.y=this.radius+Math.random()*(this.effect.height-this.radius*2);
  }
}

class Effect{
  constructor(canvas, context){
    this.canvas=canvas;
    this.context=context;
    this.width=this.canvas.width;
    this.height=this.canvas.height;
    this.particles=[];
    this.numberOfParticles=300;
    this.creatParticles();

    this.mouse={
      x: 0,
      y: 0,
      pressed: false,
      radius: 200
    }
    window.addEventListener('resize', e =>{
      this.resize(e.target.window.innerWidth, e.target.window.innerHeight);
    });
    Window.addEventListener('mousemove', e=> {
      if(this.mouse.pressed){
        this.mouse.x=e.x;
        this.mouse.y=e.y;
      }
    });
    window.addEventListener('mousedown', e=>{
      this.mouse.pressed=true;
      this.mouse.x=e.x;
      this.mouse.y=e.y;
    });
    window.addEventListener('mouseup', e=>{
      this.mouse.pressed=false;
    })
  }
  creatParticles()
}
