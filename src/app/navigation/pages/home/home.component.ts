import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as Parallax from 'parallax-js';
import Swiper from 'swiper';
import { SwiperImage } from '../../../classes/swiper-image';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('mainscene') parallaxScene: ElementRef;
  @ViewChild('testSlider') testSlider: ElementRef;
  @ViewChild('pagination') pagination: ElementRef;

  Artists: SwiperImage[] = new Array();
  Collaborators: SwiperImage[] = new Array();
  EventPhotos: SwiperImage[] = new Array();
  Activities: SwiperImage[] = new Array();
  spin = false;
  timer = '';

  constructor() {
  
   }

  ngOnInit() {
    this.setupArtists();
    this.setupColaborators();
    this.setupEventPhotos();
    this.setupActivities();

  }

  ngAfterViewInit() {
    this.setupTimer();
    this.setupParallax();
    
   
  }

  setupParallax() {
    const scene = this.parallaxScene.nativeElement;

    if (scene !== null) {
      const parallaxInstance = new Parallax(scene, {
        relativeInput: true,
        hoverOnly: true
      });
    }

  }

  goToTickets() {

    const url = 'http://eventbytz.com/event/detail/5d710e7362e0c00619f3b38c/lunar-utopia/?fbclid=IwAR1QXVkRpIAnk_rRt0Gw9CX5UCjY6Ptxd0-u-srOS_vc6lAxiCnZmVCp6cc';

    window.open(url, "_blank");

  }

  setupTimer() {
    // Set the date we're counting down to
    var countDownDate = new Date("Nov 8, 2019 16:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(() => {

      console.log('interval hit');

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      //   + minutes + "m " + seconds + "s ";

      this.timer = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        this.timer = "EXPIRED";
      }
    }, 1000);


  }

  // Initialize Swiper 
  setupSwiper() {
    var swiper = new Swiper(this.testSlider.nativeElement, {
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: this.pagination.nativeElement,
      },
    });
  }

  setupArtists() {
    this.Artists.push(new SwiperImage('OM', '/assets/Images/Artists/OM.jpg'));
    this.Artists.push(new SwiperImage('Arthur Merlin', '/assets/Images/Artists/Arthur_Merlin.jpg'));
    this.Artists.push(new SwiperImage('Meek', '/assets/Images/Artists/Meek.jpg'));
    this.Artists.push(new SwiperImage('Un-defined', '/assets/Images/Artists/Un-defined.jpg'));
    this.Artists.push(new SwiperImage('What we are', '/assets/Images/Artists/What-we-are.jpg'));
    this.Artists.push(new SwiperImage('Rebel mind', '/assets/Images/Artists/Rebel-mind.jpg'));
    this.Artists.push(new SwiperImage('Mitchell Cebbs', '/assets/Images/Artists/Mitchell-Cebbs.jpg'));
    this.Artists.push(new SwiperImage('YELSEW', '/assets/Images/Artists/YELSEW.jpg'));
    this.Artists.push(new SwiperImage('SPYC9T1', '/assets/Images/Artists/SPYC9T1.jpg'));
    this.Artists.push(new SwiperImage('Eco-teric', '/assets/Images/Artists/Eco-teric.jpg'));
    this.Artists.push(new SwiperImage('Shakti', '/assets/Images/Artists/Shakti.jpg'));
    this.Artists.push(new SwiperImage('Alessandro', '/assets/Images/Artists/Alessandro.jpg'));
    this.Artists.push(new SwiperImage('Phil Keye', '/assets/Images/Artists/Phil_Keye.jpg'));
  }

  setupColaborators() {
    this.Collaborators.push(new SwiperImage('Piet aarde', '/assets/Images/Collaborators/Piet_aarde.jpg', 'Drumming, Didgeridoo master, Sweat-lodge facilitator, Shaman'));
    this.Collaborators.push(new SwiperImage('Charlie & Kat', '/assets/Images/Collaborators/Charlie_Kat.jpg', 'Fire dancers, Vegan smoothie wizards'));
    this.Collaborators.push(new SwiperImage('Seka Lantern Maleka', '/assets/Images/Collaborators/Seka_Maleka.jpg', 'Drumming leader, Ethereal Chanter, Shaman'));
    this.Collaborators.push(new SwiperImage('Ferdinand Lourens', '/assets/Images/Collaborators/Ferdinand.jpg', 'Mindfulness teacher, Laughing Yoga Instructor'));
    this.Collaborators.push(new SwiperImage('Cristina Torralbas Burchell', '/assets/Images/Collaborators/Cristina.jpg', 'Dancer, entertainer, Dancing instructor'));
    this.Collaborators.push(new SwiperImage('Melian - Lion Yoga', '/assets/Images/Collaborators/Melian.jpg', 'Vinyasa Teacher and Yogi'));
    this.Collaborators.push(new SwiperImage('Jean Francois Sobiecki', '/assets/Images/Collaborators/Jean.jpg', 'Plant medicine and holistic healer'));



  }

  setupEventPhotos() {
    this.EventPhotos.push(new SwiperImage('', '/assets/Images/Venue/1.jpg'));
    this.EventPhotos.push(new SwiperImage('', '/assets/Images/Venue/2.jpg'));
    this.EventPhotos.push(new SwiperImage('', '/assets/Images/Venue/3.jpg'));
    this.EventPhotos.push(new SwiperImage('', '/assets/Images/Venue/4.jpg'));
    this.EventPhotos.push(new SwiperImage('', '/assets/Images/Venue/5.jpg'));
    this.EventPhotos.push(new SwiperImage('', '/assets/Images/Venue/6.jpg'));
    this.EventPhotos.push(new SwiperImage('', '/assets/Images/Venue/7.jpg'));
    this.EventPhotos.push(new SwiperImage('', '/assets/Images/Venue/8.jpg'));
    this.EventPhotos.push(new SwiperImage('', '/assets/Images/Venue/9.jpg'));
    this.EventPhotos.push(new SwiperImage('', '/assets/Images/Venue/17.JPG'));
    this.EventPhotos.push(new SwiperImage('', '/assets/Images/Venue/59.JPG'));
    this.EventPhotos.push(new SwiperImage('', '/assets/Images/Venue/39.JPG'));
    this.EventPhotos.push(new SwiperImage('', '/assets/Images/Venue/40.JPG'));
    this.EventPhotos.push(new SwiperImage('', '/assets/Images/Venue/98.JPG'));
    this.EventPhotos.push(new SwiperImage('', '/assets/Images/Venue/102.JPG'));
    this.EventPhotos.push(new SwiperImage('', '/assets/Images/Venue/101.JPG'));

  }

  setupActivities() {

    this.Activities.push(new SwiperImage('Bush Pub Wizardry', '/assets/Images/Activities/BushPub.jpg'));
    this.Activities.push(new SwiperImage('Furious Dancing!', '/assets/Images/Activities/Dancing.jpg'));
    this.Activities.push(new SwiperImage('Drumming Collaborations', '/assets/Images/Activities/Drumming.jpg'));
    this.Activities.push(new SwiperImage('Epic Food Market', '/assets/Images/Activities/Food.jpg'));
    this.Activities.push(new SwiperImage('Friendly environment', '/assets/Images/Activities/Friendship.jpg'));
    this.Activities.push(new SwiperImage('Gifts Of Gaia', '/assets/Images/Activities/GOG_market.jpg'));
    this.Activities.push(new SwiperImage('Live Music Collaborations', '/assets/Images/Activities/Live-Collaboration.jpg'));
    this.Activities.push(new SwiperImage('Meditation Workshops', '/assets/Images/Activities/Meditation.jpg'));
    this.Activities.push(new SwiperImage('Sweat-lodge Facilitation', '/assets/Images/Activities/SweatLodge.jpg'));

  }

}
