/**
 * AWS Module: Action: Modularized Code
 */
var threescale = require('awsm-3scale').authenticate;

// Export For Lambda Handler
module.exports.run = function(event, context, cb) {
  return cb(null, action(event, context));
};

// Your Code
var action = function(event, context) {

  var questions = [
    "A romantic candlelit dinner would be incomplete without _____.",
    "A successful job interview begins with a firm handshake and ends with _____.",
    "After blacking out during New Year's Eve, I was awoken by _____.",
    "After months of debate, the Occupy Wall Street General Assembly could only agree on “More _____!”",
    "After the earthquake, Sean Penn brought _____ to the people of Haiti.",
    "Alternative medicine is now embracing the curative powers of _____.",
    "And I would have gotten away with it, too, if it hadn't been for _____.",
    "And what did you bring for show and tell?",
    "Anthropologists have recently discovered a primitive tribe that worships _____.",
    "As part of his contract, Prince won't perform without _____ in his dressing room.",
    "As part of his daily regimen, Anderson Cooper sets aside 15 minutes for _____.",
    "BILLY MAYS HERE FOR _____.",
    "Before I run for president, I must destroy all evidence of my involvement with _____.",
    "But before I kill you, Mr. Bond, I must show you _____.",
    "Call the law offices of Goldstein & Goldstein, because no one should have to tolerate _____ in the workplace.",
    "Charades was ruined for me forever when my mom had to act out _____.",
    "Coming to Broadway this season, _____: The Musical.",
    "Dear Abby, I'm having some trouble with ______ and would like your advice.",
    "During Picasso's often-overlooked Brown Period, he produced hundreds of paintings of _____.",
    "During high school I never really fit in until I found _____ club.",
    "During his midlife crisis, my dad got really into _____.",
    "During sex, I like to think about _____.",
    "Every Christmas my uncle gets drunk and tells the story about _____.",
    "Everyone down on the ground! We don't want to hurt anyone. We're just here for _____.",
    "Finally! A service that delivers _____ right to your door.",
    "Having problems with _____? Try _____!",
    "He who controls _____ controls the world.",
    "Hey baby, come back to my place and I'll show you _____.",
    "How am I maintaining my relationship status.",
    "I do not know with what weapons World War III will be fought, but World War IV will be fought with ______.",
    "I drink to forget _____.",
    "I got 99 problems but _____ ain't one.",
    "I learned the hard way that you can't cheer up a grieving friend with _____.",
    "I'm not like the rest of you. I'm too rich and busy for _____.",
    "I'm sorry professor, but I couldn't complete my homework because of _____.",
    "In 1,000 years when paper money is but a distant memory, _____ will be our currency.",
    "In L.A. county Jail, word is you can trade 200 cigarettes for _____.",
    "In Michael Jackson's final moments, he thought about _____.",
    "In Rome, there are whisperings that the Vatican has a secret room devoted to _____."
  ];

  var answers = [
    "72 virgins.",
    "8 oz. of sweet Mexican black-tar heroin.",
    "A 55-gallon drum of lube.",
    "A Bop It.",
    "A Burmese tiger pit.",
    "A Christmas stocking full of coleslaw.",
    "A Gypsy curse.",
    "A Hungry-Man Frozen Christmas Dinner for One.",
    "A PowerPoint presentation.",
    "A Super Soaker full of cat pee.",
    "A bag of magic beans.",
    "A balanced breakfast.",
    "A beached whale.",
    "A big black dick.",
    "A big hoopla about nothing.",
    "A bigger, blacker dick.",
    "A black male in his early 20s, last seen wearing a hoodie.",
    "A bleached asshole.",
    "A bloody pacifier.",
    "A boo-boo.",
    "A botched circumcision.",
    "A brain tumor.",
    "A can of whoop-ass.",
    "A cat video so cute that your eyes roll back and your spine slides out of your anus.",
    "A clandestine butt scratch.",
    "A cooler full of organs.",
    "A cop who is also a dog.",
    "A crappy little hand.",
    "A death ray.",
    "A defective condom.",
    "A disappointing birthday party.",
    "A dollop of sour cream.",
    "A drive-by shooting.",
    "A falcon with a cap on its head.",
    "A fetus.",
    "A foul mouth.",
    "A gassy antelope.",
    "A gentle caress of the inner thigh.",
    "A good sniff.",
    "A greased-up Matthew McConaughey.",
    "A homoerotic volleyball montage.",
    "A hot mess.",
    "A lamprey swimming up the toilet and latching onto your taint.",
    "A lifetime of sadness.",
    "A look-see.",
    "A low standard of living.",
    "A magic hippie love cloud.",
    "A man in yoga pants with a ponytail and feather earrings.",
    "A mating display.",
    "A micropenis.",
    "A middle-aged man on roller skates.",
    "A mime having a stroke.",
    "A monkey smoking a cigar.",
    "A mopey zoo lion.",
    "A murder most foul.",
    "A nuanced critique.",
    "A passionate Latino lover.",
    "A pile of squirming bodies.",
    "A pinata full of scorpions.",
    "A really cool hat.",
    "A rival dojo",
    "A robust mongoloid.",
    "A sad fat dragon with no friends.",
    "A sad handjob.",
    "A salty surprise.",
    "A sassy black woman.",
    "A sausage festival.",
    "A sea of troubles.",
    "A slightly shittier parallel universe.",
    "A snapping turtle biting the tip of your penis.",
    "A soulful rendition of “Ol' Man River.”",
    "A spontaneous conga line.",
    "A squadron of moles wearing aviator goggles.",
    "A stray pube.",
    "A surprising amount of hair.",
    "A sweaty, panting leather daddy.",
    "A sweet spaceship.",
    "A thermonuclear detonation.",
    "A tiny horse.",
    "A toxic family environment.",
    "A vagina that leads into another dimension.",
    "A visually arresting turtleneck.",
    "A web of lies.",
    "A windmill full of corpses.",
    "A woman scorned.",
    "A zesty breakfast burrito.",
    "AIDS.",
    "AXE body spray.",
    "Aaron Burr.",
    "Active listening.",
    "Actually getting shot, for real.",
    "Actually taking candy from a baby.",
    "Adderall.",
    "African children.",
    "Agriculture.",
    "Alcoholism.",
    "All my friends dying.",
    "All of this blood.",
    "All-you-can-eat shrimp for $4.99.",
    "Altar boys.",
    "American Gladiators.",
    "Amputees.",
    "An M. Night Shyamalan plot twist.",
    "An Oedipus complex.",
    "An all-midget production of Shakespeare's Richard III.",
    "An army of skeletons.",
    "An ass disaster.",
    "An asymmetric boob job.",
    "An erection that lasts more than four hours.",
    "An ether-soaked rag.",
    "An honest cop with nothing left to lose.",
    "An icepick lobotomy.",
    "An unhinged ferris wheel rolling toward the sea.",
    "An unstoppable wave of fire ants.",
    "Anal beads.",
    "Another goddamn vampire movie.",
    "Another shitty year.",
    "Another shot of morphine.",
    "Apologizing.",
    "Appreciative snapping.",
    "Arnold Schwarzenegger.",
    "Asians who aren't good at math.",
    "Assless chaps.",
    "Attitude.",
    "Auschwitz.",
    "Authentic Mexican cuisine.",
    "Autocannibalism.",
    "BATMAN!!!",
    "Balls.",
    "Barack Obama.",
    "Basic human decency.",
    "Beating your wives.",
    "Beefin' over turf.",
    "Bees?",
    "Being a busy adult with many important things to do.",
    "Being a dick to children.",
    "Being a dinosaur.",
    "Being a motherfucking sorcerer.",
    "Being awesome at sex.",
    "Being fabulous.",
    "Being marginalized.",
    "Being on fire.",
    "Being rich.",
    "Bill Clinton, naked on a bearskin rug with a saxophone.",
    "Bill Nye the Science Guy.",
    "Bingeing and purging.",
    "Bitches.",
    "Black people.",
    "Bling.",
    "Blood farts.",
    "Blowing some dudes in an alley.",
    "Booby-trapping the house to foil burglars.",
    "Boogers.",
    "Boris the Soviet Love Hammer.",
    "Bosnian chicken farmers.",
    "Breaking out into song and dance.",
    "Britney Spears at 55.",
    "Bullshit.",
    "Buying the right pants to be cool.",
    "Cards Against Humanity.",
    "Carnies.",
    "Catapults.",
    "Catastrophic Urethral Trauma.",
    "Centaurs.",
    "Chainsaws for hands.",
    "Charisma.",
    "Cheating in the Special Olympics.",
    "Child abuse.",
    "Child beauty pageants.",
    "Children on leashes.",
    "Chivalry.",
    "Christopher Walken.",
    "Chugging a lava lamp.",
    "Civilian casualties.",
    "Clams.",
    "Classist Undertones.",
    "Clearing a bloody path through Walmart with a scimitar.",
    "Coat hanger abortions.",
    "Cock.",
    "Cockfights.",
    "College.",
    "Concealing a boner.",
    "Consultants.",
    "Copping a feel.",
    "Coughing into a vagina.",
    "Count Chocula.",
    "Crippling debt.",
    "Crying into the pages of Sylvia Plath.",
    "Crystal meth.",
    "Cuddling.",
    "Customer service representatives.",
    "Cybernetic enhancements.",
    "Daddy issues.",
    "Daddy's belt.",
    "Dancing with a broom.",
    "Darth Vader.",
    "Date rape.",
    "Dead babies.",
    "Dead parents.",
    "Death by Steven Seagal.",
    "Deflowering the princess.",
    "Demonic possession.",
    "Dental dams.",
    "Dick Cheney.",
    "Dick fingers.",
    "Dining with cardboard cutouts of the cast of “Friends.”",
    "Disco fever.",
    "Doin' it in the butt.",
    "Doing the right thing.",
    "Domino's Oreo Dessert Pizza.",
    "Dorito breath.",
    "Double penetration.",
    "Drinking alone.",
    "Drinking ten 5-hour ENERGYs to get fifty continuous hours of energy.",
    "Dropping a chandelier on your enemies and riding the rope up.",
    "Dry heaving.",
    "Dwarf tossing.",
    "Dying alone and in pain.",
    "Dying of dysentery.",
    "Dying.",
    "Eating Tom Selleck's mustache to gain his powers.",
    "Eating all of the cookies before the AIDS bake-sale.",
    "Eating an albino.",
    "Eating an entire snowman.",
    "Eating the last known Bison.",
    "Edible underpants.",
    "Elderly Japanese men.",
    "Elf cum.",
    "Embryonic stem cells.",
    "Emotions.",
    "Enormous Scandinavian women.",
    "Erectile dysfunction.",
    "Estrogen.",
    "Ethnic cleansing.",
    "Eugenics.",
    "Euphoria by Calvin Klein.",
    "Exactly what you'd expect.",
    "Exchanging pleasantries.",
    "Existing.",
    "Expecting a burp and vomiting on the floor.",
    "Explosions.",
    "Fabricating statistics.",
    "Famine.",
    "Fancy Feast.",
    "Farting and walking away.",
    "Fear itself.",
    "Feeding Rosie O'Donnell.",
    "Fetal alcohol syndrome.",
    "Fiery poops.",
    "Figgy pudding.",
    "Filling every orifice with butterscotch pudding.",
    "Finding Waldo.",
    "Finding a skeleton.",
    "Finger painting.",
    "Fingering.",
    "Firing a rifle into the air while balls deep in a squealing hog.",
    "Fisting.",
    "Five-Dollar Footlongs.",
    "Flash flooding.",
    "Flesh-eating bacteria.",
    "Flightless birds.",
    "Flying robots that kill people.",
    "Flying sex snakes.",
    "Foreskin.",
    "Forgetting the Alamo.",
    "Former President George W. Bush.",
    "Free samples.",
    "Friction.",
    "Friendly fire.",
    "Friends who eat all the snacks.",
    "Friends with benefits.",
    "Frolicking.",
    "Fuck Mountain.",
    "Fucking up “Silent Night” in front of 300 parents.",
    "Full frontal nudity.",
    "Gandalf.",
    "Gay aliens",
    "Geese.",
    "Genetically engineered super-soldiers.",
    "Genghis Khan.",
    "Genital piercings.",
    "George Clooney's musk.",
    "German dungeon porn.",
    "Getting abducted by Peter Pan.",
    "Getting drunk on mouthwash.",
    "Getting hilariously gang-banged by the Blue Man Group."
  ];

  var pickAQuestion = function() {
    var randomQuestion = questions[Math.floor(Math.random() * questions.length-1)];
      return randomQuestion;
    };
    
  var pickAnAnswer = function() {
    var randomAnswer = answers[Math.floor(Math.random() * answers.length-1)];
      return randomAnswer;
    };

    console.log(threescale.authenticate(event.user_key));
    if (threescale.authenticate(event.user_key)) {
      context.succeed({"question": pickAQuestion(), "answer": pickAnAnswer()});
    } else {
      context.fail('403, unauthorized');
    }

  //console.log(event.user_key);
  // threescale.authenticate(event.user_key, function(err, res) {
  //   console.log('err=' + err + "\n res=" + res);
  //   if (!res) {
  //     console.log("FAAAIL")
  //     context.fail(err);
  //   } else {
  //     console.log("PASSS")
  //     context.succeed({"question": pickAQuestion(), "answer": pickAnAnswer()});
  //     //return {"question": pickAQuestion(), "answer": pickAnAnswer()};
  //   } 
  // });
  //context.succeed("AAAA")
};
