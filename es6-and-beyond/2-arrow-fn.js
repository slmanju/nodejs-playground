// then
setTimeout(function() {
  console.log('greetings');
}, 2000);

// now
setTimeout(() => console.log('greetings'), 2000);
