const program = require('commander')
const api = require('./index.js')

program
  .option('-f,--xxx', 'fff is fff')

program
  .command('add')
  .description('add a task to your TODO lists')
  .action((...args) => {
    const words = args[args.length-1].args.join(' ')
    api.add()
    console.log(words);
  });
program
  .command('clear')
  .description('To clear your TODO lists ?')
  .action(() => {
    console.log("clear")
  });


program.parse(process.argv);