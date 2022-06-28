<h1 align='center'>TestBot123</>
<h3 align='center'>Wow another discord bot</>

<div align='center'>
    <br>
    <img src="https://img.shields.io/badge/Discord.js%20v13.7-5865F2.svg?style=flat&logo=discord&logoColor=white">
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white">
    <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E">
    <img src="https://img.shields.io/badge/License-GPLv3-blue.svg?style=flat">
</div>
<br>

# How to use:
Just add the bot to your Discord Server and have fun!

| Color of the Embed | Meaning |
| - | - |
| Red Embed | A Error Occurred |
| Orange Embed | Loading Something |
| Green Embed | Command ran Successfully |
| Cyan Embed | Information about something |

# Running on your own / Making a Fork

If you want to run on your own you will need to do this steps

1. Install Node if you haven't
2. Clone this Repo with `git clone 'https://github.com/Brisolo32/TestBot123.git'`
3. Move to the cloned directory and `src` folder
4. In there create a `config.json` and add the following values like this
```json
{
    "guildId": "Your development guild here",
    "clientId": "Your client id (Application id) here",
    "token": "Your token here",
    "colours": {
        // This colours can be modified for your liking
        // But they need to be here
        "error": "#db0f0f",
        "loading": "#ff8000",
        "success": "#22d60b",
        "info": "#00b3ff"
    }
}
```
5. Run `npm i` to install 18TB of mostly useless packages
6. Finally, run `node main` or `node .` to run


# Contribuiting:

Contribuitions are always welcome! You can contribute to this project by Forking it and (After you modified it) making a Pull Request
