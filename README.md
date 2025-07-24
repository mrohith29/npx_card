# mrohith29

> **Hi, nice to see you here! 😊**

A fun, interactive CLI business card for [Mariyala Rohith](https://rohithmariyala.netlify.app), built with Node.js.  
Run it with `npx` to get contact info, social links, and quick actions like sending an email or scheduling a meeting—all from your terminal!

---

## Demo

```sh
npx mrohith29
```

You’ll see something like:

```
┌─────────────────────────────────────────────────────────────┐
│             MARIYALA ROHITH                                │
│                                                             │
│       Work:  Software Developer at Orchestration Syndicate  │
│                                                             │
│    Twitter:  https://twitter.com/mrohith29                  │
│     GitHub:  https://github.com/mrohith29                   │
│   LinkedIn:  https://linkedin.com/in/mariyala-rohith        │
│        Web:  https://rohithmariyala.com             │
│                                                             │
│       Card:  npx mrohith29                                  │
│                                                             │
│ I am currently looking for new opportunities,               │
│ my inbox is always open. Whether you have a                  │
│ question or just want to say hi, I will try                 │
│ my best to get back to you!                                 │
└─────────────────────────────────────────────────────────────┘

Tip: Try cmd/ctrl + click on the links above

? What you want to do?
  › Send me an email
    Schedule a Meeting
    Just quit.
```

---

## Features

- **Beautiful CLI Card:** Shows name, job, and all major social links in a styled box.
- **Interactive Actions:**  
  - **Send Email:** Opens your default mail client to contact Rohith.
  - **Schedule Meeting:** Opens a Calendly link to book a meeting.
  - **Quit:** Exits the CLI.
- **Clickable Links:** Most terminals support cmd/ctrl + click to open links.
- **Fun and Friendly:** A personal touch for networking and sharing your info.

---

## Installation & Usage

You don’t need to install anything globally!

Just run:

```sh
npx mrohith29
```

Or, if you want to clone and run locally:

```sh
git clone https://github.com/mrohith29/npx_card.git
cd npx_card
npm install
npm start
```

---

## Requirements

- Node.js v12 or higher
- Works on Windows, macOS, and Linux terminals

---

## How It Works

- Uses [boxen](https://www.npmjs.com/package/boxen) for the card UI
- Uses [chalk](https://www.npmjs.com/package/chalk) for colors
- Uses [inquirer](https://www.npmjs.com/package/inquirer) for interactive prompts
- Uses [open](https://www.npmjs.com/package/open) to launch email/calendly in your browser
- Clears the terminal for a clean look

---

## Customization

Want your own CLI card?  
Fork this repo, update the `data` object in `index.mjs` with your info, and publish to npm!

---

## Author

**Mariyala Rohith**  
- [Website](https://rohithmariyala.netlify.app)
- [GitHub](https://github.com/mrohith29)
- [Twitter](https://twitter.com/mrohith29)
- [LinkedIn](https://linkedin.com/in/mariyala-rohith)

---

## License

ISC

---

Let me know if you want to add badges, GIFs, or more advanced usage instructions!
