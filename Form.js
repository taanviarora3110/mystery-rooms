class Form {

  constructor() {
//this.input = createInput("").attribute("placeholder", "Name");
    this.play = createButton('Play');
    this.rules = createButton('How to Play');
    this.settings = createButton('Settings');
    this.feedback = createButton('Feedback');

  }
  
  display(){
   
    this.play.position(displayWidth/2  , displayHeight/2-100 );
    this.rules.position(displayWidth/2 , displayHeight/2-70);
    this.settings.position(displayWidth/2,displayHeight/2-40);
    this.feedback.position(displayWidth/2  , displayHeight/2-10 );

  }}
