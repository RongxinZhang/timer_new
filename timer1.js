const args = process.argv.splice(2);

const timer = function(seconds) {
  console.log(`-> Timer set for ${seconds}`);
  setTimeout(() => {
    process.stdout.write('\x07');
  }, seconds * 1000);
};

const createTimer = function(times) {
  if (times.length < 1) return;

  for (const seconds of args) {
    if (seconds > 0 && Number.parseInt(seconds)) {
      timer(seconds);
    }
  }
};

createTimer(args);