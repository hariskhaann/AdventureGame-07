import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Computer {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please enter your name:",
});
let computer = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your Computer",
    choices: ["skeleton", "Zombie", "MOB"],
});
let p1 = new Player(player.name);
let c1 = new Computer(computer.name);
do {
    if (computer.select == "skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "com",
            message: "Select your Computer",
            choices: ["Attack", "Drink portion", "Run for your Life"],
        });
        if (ask.com == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${c1.name} fuel is ${c1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                c1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${c1.name} fuel is ${c1.fuel}`));
                if (c1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You win"));
                    process.exit();
                }
            }
        }
        if (ask.com == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.com == "Run for your Life") {
            console.log(chalk.red.bold.italic("You Loose, Better luck next time"));
            process.exit();
        }
    }
    if (computer.select == "Zombie") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "com",
            message: "Select your Computer",
            choices: ["Attack", "Drink portion", "Run for your Life"],
        });
        if (ask.com == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${c1.name} fuel is ${c1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                c1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${c1.name} fuel is ${c1.fuel}`));
                if (c1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You win"));
                    process.exit();
                }
            }
        }
        if (ask.com == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.com == "Run for your Life") {
            console.log(chalk.red.bold.italic("You Loose, Better luck next time"));
            process.exit();
        }
    }
    if (computer.select == "MOB") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "com",
            message: "Select your Computer",
            choices: ["Attack", "Drink portion", "Run for your Life"],
        });
        if (ask.com == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${c1.name} fuel is ${c1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                c1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${c1.name} fuel is ${c1.fuel}`));
                if (c1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You win"));
                    process.exit();
                }
            }
        }
        if (ask.com == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.com == "Run for your Life") {
            console.log(chalk.red.bold.italic("You Loose, Better luck next time"));
            process.exit();
        }
    }
} while (true);
