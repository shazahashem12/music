class Player{
    constructor(){
        var heightMain=document.getElementById("player");
        
        heightMain.style.height=screen.height + "px";
        if(screen.width<500){
            alert(screen.width);
            heightMain.style.width=screen.width + "px";
            
        }
       var heightDiv=document.getElementById("content");
       heightDiv.style.height=screen.height - 300 +"px";

    }
}
class Audio_Player{
    constructor(){
        this.audio_file=document.getElementById("audio-file");
        this.title_radio=document.getElementById("title_radio");
        this.play_pause_button=document.getElementById("play-pause");
        this.isPlayed;
        this.play_pause_button.addEventListener("click",()=>{
        this.pausePlay();
            
        });
        this.names_radio=[];
        this.names_radio[0]="RAINS";
        this.names_radio[1]="WAV";
        this.names_radio[2]="BISKRA";

        this.source_audio=[];
        this.source_audio[0]="drumbs.mp3";
        this.source_audio[1]="music.mp3";
        this.source_audio[2]="MG.mp3";

        this.server=0;
        this.setResource();


        

       document.getElementById("next").addEventListener("click",()=>{
           if(this.server<this.source_audio.length - 1){
               ++this.server;
                this.setResource();
               this.isPlayed=false;
              this.pausePlay();

            }
            else{
                this.server=0;
                this.setResource();
            }
            //this.setResource();
            localStorage.setItem("Save_position",this.server);


       });

        document.getElementById("back").addEventListener("click",()=>{
           if(this.server>0){
                --this.server;
               this.setResource();
               this.isPlayed=false;
            this.pausePlay();

                
           }
           else{
               this.server=this.source_audio.length - 1;
               this.setResource();
           }
           localStorage.setItem("Save_position",this.server);
           //this.setResource();
        });

           

        }
        
    
    
    pausePlay(){
        if(this.isPlayed == false){
            this.setResource();
            this.audio_file.play();
            this.play_pause_button.src="./img/pause.png";
            this.isPlayed=true;
            
        }else{
            this.audio_file.pause();
            this.isPlayed=false;
            this.play_pause_button.src="./img/play.png";
        }
      
       }
       setResource(){
           if(localStorage.getItem("Save_position")!=null){
               this.server=localStorage.getItem("Save_position");
           }
        
           this.audio_file.src=this.source_audio[this.server];
           this.title_radio.innerHTML=this.names_radio[this.server];
           

       }
}
onload = new Player();
onload=new Audio_Player();