var wooqerService=angular.module('wooqerApp.servicesV3',[]);
var wooqerService=angular.module('wooqerApp.servicesV3');

wooqerService.service('jsonObjects', function() {
	this.dataObject={
		uniqueID:"",
		dataThumbnailLocation:"",
		dataLocation:"",
		dataTitle:"",
		dataLink:"",
		playIcon:"",
		dataType:"",
		questions:[],
		comments:[],
	};
	this.questionObject={
			id:"",
			question:"",
			choices:[],
			answer:"",
	};
	this.commentObject={
		comment:"",
		userImage:"",
		userName:""
	}
	// var getRandomInt=function() {
	// 	var min=1;
	// 	var max=1000000000000;
 //  		return Math.floor(Math.random() * (max - min)) + min;
	// }
	//craeating data objects for videos
	this.videoArray=[]
	for(var objectCount=0;objectCount<6;objectCount++){
		var videoObject=JSON.parse(JSON.stringify(this.dataObject));
		videoObject.uniqueID="vid"+objectCount;
		videoObject.dataType="video";
		this.videoArray.push(videoObject);
		for(var questionCount=0;questionCount<2;questionCount++){
			var question=JSON.parse(JSON.stringify(this.questionObject));
			question.id=questionCount;
			this.videoArray[objectCount].questions.push(question);
			var choice=0;
			this.videoArray[objectCount].questions[questionCount].choices[choice++]="Yes";
			this.videoArray[objectCount].questions[questionCount].choices[choice++]="No";
			this.videoArray[objectCount].questions[questionCount].choices[choice++]="May Be";
			this.videoArray[objectCount].questions[questionCount].choices[choice++]="No Comments";
		}
		
		this.videoArray[objectCount].questions[0].question="Was this video useful to you?";
		this.videoArray[objectCount].questions[1].question="Would you recommend this video to others?";
		//information realted to comments and different users
		for(var commentCount=0;commentCount<2;commentCount++){
			var comment=JSON.parse(JSON.stringify(this.commentObject));
			this.videoArray[objectCount].comments.push(comment);
		}
		this.videoArray[objectCount].comments[0].comment="Great HD wildlife video.";
		this.videoArray[objectCount].comments[1].comment="So much to learn from natural habitat of species.";
		this.videoArray[objectCount].comments[0].userImage="images/annonymous_user2.jpg";
		this.videoArray[objectCount].comments[1].userImage="images/annonymous_user3.jpg";
		this.videoArray[objectCount].comments[0].userName="Jonah Hill"
		this.videoArray[objectCount].comments[1].userName="kal Penn"
		this.videoArray[objectCount].playIcon="images/red_play.png";
	};
		this.videoArray[0].dataThumbnailLocation="videos/ogv_demo.png";
		this.videoArray[0].dataLocation="videos/toy.ogv";
		this.videoArray[0].dataLink="AI Robot at work amazing show";
		this.videoArray[1].dataThumbnailLocation="videos/demo_mp4.png";
		this.videoArray[1].dataLocation="videos/white_bunny.mp4";
		this.videoArray[1].dataLink="One of the best animation you will ever see";
		this.videoArray[2].dataThumbnailLocation="videos/webm_demo.png";
		this.videoArray[2].dataLocation="videos/elephants-dream.webm";
		this.videoArray[2].dataLink="Big Elephant Day Dreaming Lovely Animation ";
		this.videoArray[3].dataThumbnailLocation="videos/wildlife.jpg";
		this.videoArray[3].dataLocation="videos/wildlife.mp4";
		this.videoArray[3].dataLink="Discovery Video HD ";
		this.videoArray[4].dataThumbnailLocation="videos/wildlife.jpg";
		this.videoArray[4].dataLocation="videos/wildlife.mp4";
		this.videoArray[4].dataLink="Discovery Video HD ";
		this.videoArray[5].dataThumbnailLocation="videos/webm_demo.png";
		this.videoArray[5].dataLocation="videos/elephants-dream.webm";
		this.videoArray[5].dataLink="Big Elephant Day Dreaming Lovely Animation";



	//creating data objects for images
	this.imageArray=[];
	for(var objectCount=0;objectCount<9;objectCount++){
		var imageObject=JSON.parse(JSON.stringify(this.dataObject));
		imageObject.uniqueID="img"+objectCount;
		imageObject.dataType="image";
		this.imageArray.push(imageObject);
		for(var questionCount=0;questionCount<2;questionCount++){
			var question=JSON.parse(JSON.stringify(this.questionObject));
			question.id=questionCount;
			this.imageArray[objectCount].questions.push(question);
			var choice=0;
			this.imageArray[objectCount].questions[questionCount].choices[choice++]="Yes it was a very helpful image. can't thanks enough";
			this.imageArray[objectCount].questions[questionCount].choices[choice++]="No";
			this.imageArray[objectCount].questions[questionCount].choices[choice++]="May Be";
			this.imageArray[objectCount].questions[questionCount].choices[choice++]="No Comments";

		}
		
		this.imageArray[objectCount].questions[0].question="Was this image useful to you?"
		this.imageArray[objectCount].questions[1].question="Would you recommend this image to others?"
		//information realted to comments and different users
		for(var commentCount=0;commentCount<2;commentCount++){
			var comment=JSON.parse(JSON.stringify(this.commentObject));
			this.imageArray[objectCount].comments.push(comment);
		}
		this.imageArray[objectCount].comments[0].comment="Great pic but looks edited.";
		this.imageArray[objectCount].comments[1].comment="High resolution at its best.";
		this.imageArray[objectCount].comments[0].userImage="images/annonymous_user2.jpg";
		this.imageArray[objectCount].comments[1].userImage="images/annonymous_user3.jpg";
		this.imageArray[objectCount].comments[0].userName="Jonah Hill"
		this.imageArray[objectCount].comments[1].userName="kal Penn"

	};
	this.imageArray[0].dataLocation="images/horse.jpg";
	this.imageArray[1].dataLocation="images/blue_animate.jpg";
	this.imageArray[2].dataLocation="images/car.jpg";
	this.imageArray[3].dataLocation="images/angularjs_logo.jpg";
	this.imageArray[4].dataLocation="images/soldier.jpg";
	this.imageArray[5].dataLocation="images/horse.jpg";
	this.imageArray[6].dataLocation="images/car.jpg";
	this.imageArray[7].dataLocation="images/blue_animate.jpg";
	this.imageArray[8].dataLocation="images/car.jpg";
	this.imageArray[0].dataThumbnailLocation="images/horse.jpg";
	this.imageArray[1].dataThumbnailLocation="images/blue_animate.jpg";
	this.imageArray[2].dataThumbnailLocation="images/car.jpg";
	this.imageArray[3].dataThumbnailLocation="images/angularjs_logo.jpg";
	this.imageArray[4].dataThumbnailLocation="images/soldier.jpg";
	this.imageArray[5].dataThumbnailLocation="images/horse.jpg";
	this.imageArray[6].dataThumbnailLocation="images/car.jpg";
	this.imageArray[7].dataThumbnailLocation="images/blue_animate.jpg";
	this.imageArray[8].dataThumbnailLocation="images/car.jpg";
	this.imageArray[0].dataLink="Running Horse ";
	this.imageArray[1].dataLink="Blue and Orange Hand";
	this.imageArray[2].dataLink="Super Sports Car";
	this.imageArray[3].dataLink="AngularJS";
	this.imageArray[4].dataLink="Soldier In War";
	this.imageArray[5].dataLink="Running Horse";
	this.imageArray[6].dataLink="Super Sports Car";
	this.imageArray[7].dataLink="Blue and Orange Hand";
	this.imageArray[8].dataLink="Super Sports Car";
	//creating data objects for documents
	this.documentArray=[];
	for(var objectCount=0;objectCount<9;objectCount++){
		var documentObject=JSON.parse(JSON.stringify(this.dataObject));
		documentObject.uniqueID="doc"+objectCount;
		documentObject.dataType="document"
		this.documentArray.push(documentObject);
		for(var questionCount=0;questionCount<3;questionCount++){
			var question=JSON.parse(JSON.stringify(this.questionObject));
			question.id=questionCount;
			this.documentArray[objectCount].questions.push(question);
			var choice=0;
			this.documentArray[objectCount].questions[questionCount].choices[choice++]="Yes";
			this.documentArray[objectCount].questions[questionCount].choices[choice++]="No";
			this.documentArray[objectCount].questions[questionCount].choices[choice++]="May Be";
			this.documentArray[objectCount].questions[questionCount].choices[choice++]="No Comments";

		}
		
		this.documentArray[objectCount].questions[0].question="Was this document useful to you?";
		this.documentArray[objectCount].questions[1].question="Would you recommend this document to others?";
		this.documentArray[objectCount].questions[2].question="Was this document worth the hype ?";
		//information realted to comments and different users

		for(var commentCount=0;commentCount<12;commentCount++){
			var comment=JSON.parse(JSON.stringify(this.commentObject));
			this.documentArray[objectCount].comments.push(comment);
		}
		this.documentArray[objectCount].comments[0].comment="This document is very handful for people who are new to MVC framework but it's not the stand-alone source of information.";
		this.documentArray[objectCount].comments[1].comment="Prepares you for the basics of AngularJS";
		this.documentArray[objectCount].comments[2].comment="This document is very handful for people who are new to MVC framework but it's not the stand-alone source of information.";
		this.documentArray[objectCount].comments[3].comment="Prepares you for the basics of AngularJS";
		this.documentArray[objectCount].comments[4].comment="This document is very handful for people who are new to MVC framework but it's not the stand-alone source of information.";
		this.documentArray[objectCount].comments[5].comment="Prepares you for the basics of AngularJS";
		this.documentArray[objectCount].comments[6].comment="This document is very handful for people who are new to MVC framework but it's not the stand-alone source of information.";
		this.documentArray[objectCount].comments[7].comment="Prepares you for the basics of AngularJS";
		this.documentArray[objectCount].comments[8].comment="This document is very handful for people who are new to MVC framework but it's not the stand-alone source of information.";
		this.documentArray[objectCount].comments[9].comment="Prepares you for the basics of AngularJS";
		this.documentArray[objectCount].comments[10].comment="This document is very handful for people who are new to MVC framework but it's not the stand-alone source of information.";
		this.documentArray[objectCount].comments[11].comment="Prepares you for the basics of AngularJS";
		this.documentArray[objectCount].comments[0].userImage="images/annonymous_user2.jpg";
		this.documentArray[objectCount].comments[1].userImage="images/annonymous_user2.jpg";
		this.documentArray[objectCount].comments[2].userImage="images/annonymous_user2.jpg";
		this.documentArray[objectCount].comments[3].userImage="images/annonymous_user2.jpg";
		this.documentArray[objectCount].comments[4].userImage="images/annonymous_user2.jpg";
		this.documentArray[objectCount].comments[5].userImage="images/annonymous_user2.jpg";
		this.documentArray[objectCount].comments[6].userImage="images/annonymous_user2.jpg";
		this.documentArray[objectCount].comments[7].userImage="images/annonymous_user2.jpg";
		this.documentArray[objectCount].comments[8].userImage="images/annonymous_user2.jpg";
		this.documentArray[objectCount].comments[9].userImage="images/annonymous_user3.jpg";
		this.documentArray[objectCount].comments[10].userImage="images/annonymous_user2.jpg";
		this.documentArray[objectCount].comments[11].userImage="images/annonymous_user3.jpg";
		this.documentArray[objectCount].comments[0].userName="Jonah Hill";
		this.documentArray[objectCount].comments[1].userName="kal Penn";
		this.documentArray[objectCount].comments[2].userName="Jonah Hill";
		this.documentArray[objectCount].comments[3].userName="kal Penn";
		this.documentArray[objectCount].comments[4].userName="Jonah Hill";
		this.documentArray[objectCount].comments[5].userName="kal Penn";
		this.documentArray[objectCount].comments[6].userName="Jonah Hill";
		this.documentArray[objectCount].comments[7].userName="kal Penn";
		this.documentArray[objectCount].comments[8].userName="Jonah Hill";
		this.documentArray[objectCount].comments[9].userName="kal Penn";
		this.documentArray[objectCount].comments[10].userName="Jonah Hill";
		this.documentArray[objectCount].comments[11].userName="kal Penn";

	};
	this.documentArray[0].dataLocation="data_documents/AngularJS.pdf";
	this.documentArray[1].dataLocation="data_documents/yeoman.pdf";
	this.documentArray[2].dataLocation="data_documents/sample_resume.pdf";
	this.documentArray[3].dataLocation="data_documents/bower_grunts.pdf";
	this.documentArray[4].dataLocation="data_documents/bootstrap.pdf";
	this.documentArray[5].dataLocation="data_documents/Backbone_Toolkit.docx";
	this.documentArray[6].dataLocation="data_documents/nodejs.pdf";
	this.documentArray[7].dataLocation="data_documents/facebook.pdf";
	this.documentArray[8].dataLocation="https://drive.google.com/file/d/0B5PaxB9kMXKbTUxDZnhpQnVIZV9GaGpwNjlOX3B2S2dZTEw4/edit?usp=sharing";
	this.documentArray[0].dataThumbnailLocation="images/angularjs_logo.jpg";
	this.documentArray[1].dataThumbnailLocation="images/yeoman.png";
	this.documentArray[2].dataThumbnailLocation="images/resume_logo.jpg";
	this.documentArray[3].dataThumbnailLocation="images/bower_logo.jpg";
	this.documentArray[4].dataThumbnailLocation="images/bootstrap_logo.jpg";
	this.documentArray[5].dataThumbnailLocation="images/backbone_logo.png";
	this.documentArray[6].dataThumbnailLocation="images/nodejs_logo.jpg";
	this.documentArray[7].dataThumbnailLocation="images/facebook_logo.jpg";
	this.documentArray[8].dataThumbnailLocation="images/resume_logo.jpg";
	this.documentArray[0].dataLink="Introduction To AngularJS";
	this.documentArray[1].dataLink="Yeoman Tutorial";
	this.documentArray[2].dataLink="Sample Resume";
	this.documentArray[3].dataLink="Introduction to bower";
	this.documentArray[4].dataLink="Bootstrap Tutorial";
	this.documentArray[5].dataLink="Backbone Toolkit";
	this.documentArray[6].dataLink="Introduction To Nodejs ";
	this.documentArray[7].dataLink="Facebook for Parents";
	this.documentArray[8].dataLink="Word Document";	
	});