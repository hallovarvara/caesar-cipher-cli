# Caesar cipher CLI tool

Encode and decode a text by Caesar cipher.

### Options

| option | short form | value type | meaning | required | if not specified |
| ------------- | ------ | ----- | ----- | ------ | ------ |
| --action | -a | encode or decode | what to do — encode or decode | required | error |
| --shift | -s | _number_ | shift in alphabet for cipher | required | error |
| --input | -i | _string_ | path to input file | optional | process.stdin |
| --output | -o | _string_ | path to output file | optional | process.stdout |

### Examples

```bash
ccc -s 12 -a encode -i 'input.txt' -o 'output.txt'
```