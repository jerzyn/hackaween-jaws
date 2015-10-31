/**
 * AWS Module: Action: Modularized Code
 */

// Export For Lambda Handler
module.exports.run = function(event, context, cb) {
  return cb(null, action(event, context));
};

// Your Code
var action = function(event, context) {
  console.log('Received event:', JSON.stringify(event, null, 2));

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

  var pickAQuestion = function() {
    var randomQuestion = questions[Math.floor(Math.random() * questions.length-1)];
      return randomQuestion;
    };
    
  if(event.httpMethod == "POST" && event.body){
      context.succeed({"message": event.body});
  } else {
      context.succeed({"answer": pickAQuestion()});
  }
};
