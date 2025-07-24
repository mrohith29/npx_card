#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import clear from "clear";
import open from "open";
import fs from 'fs/promises';
import request from 'request';
import path from 'path';
import ora from 'ora';
import cliSpinners from 'cli-spinners';

clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}`,
                value: () => {
                    open("mailto:mariyalarohith29@gmail.com");
                    console.log("\nDone, see you soon at inbox.\n");
                }
            },
            {
                name: `Schedule a ${chalk.redBright.bold("Meeting")}`,
                value: () => {
                    open('https://calendly.com/mariyalarohith29/30min');
                    console.log("\nSee you at the meeting\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Bye!!");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("             MARIYALA ROHITH"),
    handle: chalk.white("@mrohith29"),
    work: `${chalk.white("Software Developer at")} ${chalk
        .hex("#2b82b2")
        .bold("Orchestration Syndicate")}`,
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("mrohith29"),
    github: chalk.gray("https://github.com/") + chalk.green("mrohith29"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("mariyala-rohith"),
    web: chalk.cyan("https://rohithmariyala.netlify.app"),
    npx: chalk.red("npx") + " " + chalk.white("mrohith29"),

    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "I am currently looking for new opportunities,"
        )}`,
        `${chalk.italic("my inbox is always open. Whether you have a")}`,
        `${chalk.italic(
            "question or just want to say hi, I will try "
        )}`,
        `${chalk.italic(
            "my best to get back to you!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());
