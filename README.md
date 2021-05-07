# Caesar cipher CLI tool

Encode and decode a text by Caesar cipher.

If you meet a bug, please, let me know through:
- Telegram: [@hallovarvara](http://t.me/hallovarvara)
- Discord: Varya (@hallovarvara)
- Creating issue in repository: https://github.com/hallovarvara/caesar-cipher-cli
  There is [bug report template](https://gist.github.com/hallovarvara/d207bb94a36d6038a84c51f66560232b) for your
  comfort :)

## How make it work
_Be brave, my coding kin..._

1. Clone this repo to your computer:
```bash
git@github.com:hallovarvara/caesar-cipher-cli.git
```
or:
```bash
https://github.com/hallovarvara/caesar-cipher-cli.git
```

2. Go to root folder (named „caesar-cipher-cli“ originally):
```bash
cd caesar-cipher-cli
```

3. Install dependencies:
```bash
npm i
```

4. Check, that file `/src/output.txt` is empty. If it's not, please, make it empty.

5. Try to encrypt example in `src` folder in console:
```bash
encrypt -s -1 -a decode -i 'input.txt' -o 'output.txt'
```
If it didn't work, please, link npm scripts manually by this command:
```bash
sudo npm link
```
If it is still not working**, please, use instead of `encrypt` app key word `bin/caesar-cipher-cli`.

** I'm really sorry for that – tested on Mac OS 11.3 Big Sur and everything was completely working.

6. After that feel free to play with options. Try to:
- skip each of options for checking error handling
- provide only `--output` or `--input`
- provide nor `--output` or `--input`
- type after `--shift` something except a number
- type after `--action` random string or number
- just imagine whatever you want.

## Restrictions and rules

- Only English letters will be encrypted. Everything else will go as it is.
- If you don't provide input file path, app will ask you to type text for encrypting. You could provide as many
  strings as you want. For exiting from the process, please, press `Ctrl + C` on your keyboard.
- If you don't provide output file path, app will show encrypted text in console.

### Options

| option | short form | value type | meaning | required | if not specified |
| ------------- | ------ | ----- | ----- | ------ | ------ |
| --action | -a | encode or decode | what to do — encode or decode | required | error |
| --shift | -s | _number_ | shift in alphabet for cipher | required | error |
| --input | -i | _string_ | path to input file | optional | process.stdin |
| --output | -o | _string_ | path to output file | optional | process.stdout |

### Examples
App is recursive, so this:
```bash
encrypt -s -1 -a decode -i 'input.txt' -o 'output.txt'
```
equal to:
```bash
encrypt -s -27 -a decode -i 'input.txt' -o 'output.txt'
```
