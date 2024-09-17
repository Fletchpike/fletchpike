class operatorsExtension {
  getInfo() {
    return {
      id: 'operators',
      name: 'Operators+',
      color1: '#59c059',
      color2: '#3eaf3e',
      color3: '#389438',
      blocks: [
        {
          opcode: 'add',
          blockType: Scratch.BlockType.REPORTER,
          text: '[INPUT1]+[INPUT2]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: ''
            },
            INPUT2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: ''
            }
          }
        },
        {
          opcode: 'subtract',
          blockType: Scratch.BlockType.REPORTER,
          text: '[INPUT1]-[INPUT2]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: ''
            },
            INPUT2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: ''
            }
          }
        },
        {
          opcode: 'multiply',
          blockType: Scratch.BlockType.REPORTER,
          text: '[INPUT1]*[INPUT2]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: ''
            },
            INPUT2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: ''
            }
          }
        },
        {
          opcode: 'divide',
          blockType: Scratch.BlockType.REPORTER,
          text: '[INPUT1]/[INPUT2]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: ''
            },
            INPUT2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: ''
            }
          }
        },
        {
          opcode: 'power',
          blockType: Scratch.BlockType.REPORTER,
          text: '[INPUT1]^[INPUT2]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: ''
            },
            INPUT2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: ''
            }
          }
        },
        '---',
        {
          opcode: 'pickRandomInt',
          blockType: Scratch.BlockType.REPORTER,
          text: 'pick random integer[INPUT1] to [INPUT2]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            },
            INPUT2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 10
            }
          }
        },
        {
          opcode: 'pickRandom',
          blockType: Scratch.BlockType.REPORTER,
          text: 'pick random [INPUT1] to [INPUT2]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            },
            INPUT2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        },
        {
          opcode: 'clamp',
          blockType: Scratch.BlockType.REPORTER,
          text: 'clamp [INPUT1] to min [INPUT2] max [INPUT3]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
            },
            INPUT2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            },
            INPUT3: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 10
            }
          }
        },
        {
          opcode: 'interpolate',
          blockType: Scratch.BlockType.REPORTER,
          text: 'interpolate [INPUT1] by [INPUT2]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1.25
            },
            INPUT2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0.75
            }
          }
        },
        '---',
        {
          opcode: 'greaterThen',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[INPUT1]>[INPUT2]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: ''
            },
            INPUT2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'greaterThenOrEqual',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[INPUT1]>=[INPUT2]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: ''
            },
            INPUT2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'lessThen',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[INPUT1]<[INPUT2]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: ''
            },
            INPUT2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'lessThenOrEqual',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[INPUT1]<=[INPUT2]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: ''
            },
            INPUT2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'equals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[INPUT1]=[INPUT2]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ''
            },
            INPUT2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'notEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[INPUT1]!=[INPUT2]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ''
            },
            INPUT2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 50
            }
          }
        },
        '---',
        {
          opcode: 'and',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[INPUT1] and [INPUT2]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.BOOLEAN,
              defaultValue: false
            },
            INPUT2: {
              type: Scratch.ArgumentType.BOOLEAN,
              defaultValue: false
            }
          }
        },
        {
          opcode: 'or',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[INPUT1] or [INPUT2]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.BOOLEAN,
              defaultValue: false
            },
            INPUT2: {
              type: Scratch.ArgumentType.BOOLEAN,
              defaultValue: false
            }
          }
        },
        {
          opcode: 'not',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'not [INPUT1]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.BOOLEAN,
              defaultValue: false
            }
          }
        },
        '---',
        {
          opcode: 'join',
          blockType: Scratch.BlockType.REPORTER,
          text: 'join [INPUT1] [INPUT2]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            INPUT2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana'
            }
          }
        },
        {
          opcode: 'ifThenElseReporter',
          blockType: Scratch.BlockType.REPORTER,
          text: 'if [BOOL] then [INPUT1] else [INPUT2]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            INPUT2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana'
            },
            BOOL: {
              type: Scratch.ArgumentType.BOOLEAN
            }
          }
        },
        {
          opcode: 'replaceAll',
          blockType: Scratch.BlockType.REPORTER,
          text: 'replace all [REPLACE] in [STRING] with [REPLACEMENT]',
          arguments: {
            REPLACE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana'
            },
            REPLACEMENT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'i love bananas'
            }
          }
        },
        {
          opcode: 'itemSplit',
          blockType: Scratch.BlockType.REPORTER,
          text: 'item [INDEX] of split [STRING] with [SPLIT]',
          arguments: {
            INDEX: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            },
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apples are good'
            },
            SPLIT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ' '
            }
          }
        },
        '---',
        {
          opcode: 'letterOfString',
          blockType: Scratch.BlockType.REPORTER,
          text: 'letter [INPUT1] of [INPUT2]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            },
            INPUT2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        },
        {
          opcode: 'lengthOf',
          blockType: Scratch.BlockType.REPORTER,
          text: 'length of [INPUT1]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        },
        {
          opcode: 'contains',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[INPUT1] contains [INPUT2]?',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            INPUT2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'a'
            }
          }
        },
        '---',
        {
          opcode: 'mod',
          blockType: Scratch.BlockType.REPORTER,
          text: '[INPUT1] mod [INPUT2]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: ''
            },
            INPUT2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: ''
            }
          }
        },
        {
          opcode: 'round',
          blockType: Scratch.BlockType.REPORTER,
          text: 'round [INPUT1]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: ''
            }
          }
        },
        {
          opcode: 'radianToDegree',
          blockType: Scratch.BlockType.REPORTER,
          text: 'degrees to radian [INPUT1]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: ''
            }
          }
        },
        '---',
        {
          opcode: 'mathOperatorSingle',
          blockType: Scratch.BlockType.REPORTER,
          text: '[MENU] of [INPUT1]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: ''
            },
            MENU: {
              type: Scratch.ArgumentType.STRING,
              menu: 'mathOperatorsSingle'
            }
          }
        },
        {
          opcode: 'mathOperatorDouble',
          blockType: Scratch.BlockType.REPORTER,
          text: '[MENU] of [INPUT1] and [INPUT2]',
          arguments: {
            INPUT1: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ''
            },
            INPUT2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ''
            },
            MENU: {
              type: Scratch.ArgumentType.STRING,
              menu: 'mathOperatorsDouble'
            }
          }
        },
        {
          opcode: 'mathOperatorStatic',
          blockType: Scratch.BlockType.REPORTER,
          text: '[MENU] static',
          arguments: {
            MENU: {
              type: Scratch.ArgumentType.STRING,
              menu: 'mathOperatorsStatic'
            }
          }
        },
        '---',
        {
          opcode: 'pi',
          blockType: Scratch.BlockType.REPORTER,
          text: 'π',
          disableMonitor: true,
          arguments: {}
        },
        {
          opcode: 'newLine',
          blockType: Scratch.BlockType.REPORTER,
          text: 'new line',
          disableMonitor: true,
          arguments: {}
        },
        {
          opcode: 'tabCharacter',
          blockType: Scratch.BlockType.REPORTER,
          text: 'tab character',
          disableMonitor: true,
          arguments: {}
        },
        {
          opcode: 'randomAngle',
          blockType: Scratch.BlockType.REPORTER,
          text: 'random angle',
          disableMonitor: true,
          arguments: {}
        },
        {
          opcode: 'colorConstant',
          blockType: Scratch.BlockType.REPORTER,
          text: '#[INPUT1]',
          disableMonitor: true,
          arguments: {
              INPUT1: {
                  type: Scratch.ArgumentType.COLOR
              }
          }
        },
        {
          opcode: 'string',
          blockType: Scratch.BlockType.REPORTER,
          text: "'[INPUT1]'",
          arguments: {
              INPUT1: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'apple'
              }
          }
        },
        {
          opcode: 'stringBool',
          blockType: Scratch.BlockType.BOOLEAN,
          disableMonitor: true,
          text: "'[INPUT1]'",
          arguments: {
              INPUT1: {
                  type: Scratch.ArgumentType.STRING,
                  menu: 'trueOrFalse'
              }
          }
        }
      ],
      menus: {
          mathOperatorsSingle: {
              acceptReporters: true,
              items: ['abs', 'floor', 'ceiling', 'sqrt', 'sin', 'cos', 'tan', 'asin', 'acos', 'atan', 'exp', 'sign', 'cbrt', 'clz32']
          },
          mathOperatorsDouble: {
              acceptReporters: true,
              items: ['atan2', 'hypot', 'imul']
          },
          mathOperatorsStatic: {
              acceptReporters: true,
              items: ['e ^', 'LN10', 'LN2', 'LOG10E', 'LOG2E', 'PI', 'SQRT1 2', 'SQRT2']
          },
          trueOrFalse: {
              acceptReporters: true,
              items: ['false', 'true']
          }
      }
    };
  }

  add(args) {
    return parseFloat(args.INPUT1) + parseFloat(args.INPUT2);
  }
  subtract(args) {
    return parseFloat(args.INPUT1) - parseFloat(args.INPUT2);
  }
  multiply(args) {
    return parseFloat(args.INPUT1) * parseFloat(args.INPUT2);
  }
  divide(args) {
    return parseFloat(args.INPUT1) / parseFloat(args.INPUT2);
  }
  power(args) {
    return parseFloat(args.INPUT1) ** parseFloat(args.INPUT2);
  }
  pickRandomInt(args) {
    return Math.round((Math.random() * (parseFloat(args.INPUT2) - parseFloat(args.INPUT1))) + parseFloat(args.INPUT1));
  }
  pickRandom(args) {
    return (Math.random() * (parseFloat(args.INPUT2) - parseFloat(args.INPUT1))) + parseFloat(args.INPUT1);
  }
  greaterThen(args) {
    return (args.INPUT1 > args.INPUT2);
  }
  greaterThenOrEqual(args) {
    return (args.INPUT1 >= args.INPUT2);
  }
  lessThen(args) {
    return (args.INPUT1 < args.INPUT2);
  }
  lessThenOrEqual(args) {
    return (args.INPUT1 <= args.INPUT2);
  }
  equals(args) {
    return (args.INPUT1.toString().toUpperCase() == args.INPUT2.toString().toUpperCase());
  }
  notEquals(args) {
    return !(args.INPUT1.toString().toUpperCase() == args.INPUT2.toString().toUpperCase());
  }
  and(args) {
    return (args.INPUT1 && args.INPUT2);
  }
  or(args) {
    return (args.INPUT1 || args.INPUT2);
  }
  not(args) {
    return !(args.INPUT1);
  }
  clamp(args) {
    if (args.INPUT1 < args.INPUT2) {
      return args.INPUT2;
    } else {
      if (args.INPUT1 > args.INPUT3) {
        return args.INPUT3;
      } else {
        return args.INPUT1;
      }
    };
  }
  join(args) {
      return args.INPUT1.concat(args.INPUT2);
  }
  letterOfString(args) {
      return args.INPUT2.charAt((args.INPUT1 - 1));
  }
  lengthOf(args) {
      return args.INPUT1.length;
  }
  contains(args) {
      return (args.INPUT1.includes(args.INPUT2));
  }
  mod(args) {
      return (args.INPUT1 % args.INPUT2);
  }
  round(args) {
      return (Math.round(args.INPUT1));
  }
  mathOperatorSingle(args) {
      if (args.MENU == 'abs') {
      return Math.abs(args.INPUT1);
    } else if (args.MENU == 'floor') {
      return Math.floor(args.INPUT1);
    } else if (args.MENU == 'ceiling') {
      return Math.ceil(args.INPUT1);
    } else if (args.MENU == 'sqrt') {
      return Math.sqrt(args.INPUT1);
    } else if (args.MENU == 'sin') {
      return Math.sin(args.INPUT1);
    } else if (args.MENU == 'cos') {
      return Math.cos(args.INPUT1);
    } else if (args.MENU == 'tan') {
      return Math.tan(args.INPUT1);
    } else if (args.MENU == 'asin') {
      return Math.asin(args.INPUT1);
    } else if (args.MENU == 'acos') {
      return Math.acos(args.INPUT1);
    } else if (args.MENU == 'atan') {
      return Math.atan(args.INPUT1);
    } else if (args.MENU == 'in') {
      return Math.in(args.INPUT1);
    } else if (args.MENU == 'log') {
      return Math.log(args.INPUT1);
    } else if (args.MENU == 'cbrt') {
      return Math.cbrt(args.INPUT1);
    } else if (args.MENU == 'clz32') {
      return Math.clz32(args.INPUT1);
    } else if (args.MENU == '10 ^') {
      return Math.log10(args.INPUT1);
    } else if (args.MENU == 'exp') {
      return Math.exp(args.INPUT1);
    } else if (args.MENU == 'sign') {
      return Math.sign(args.INPUT1);
    } else {
      return 0;
    }
  }
  mathOperatorDouble(args) {
      if (args.MENU == 'atan2') {
      return Math.abs(args.INPUT1);
    } else if (args.MENU == 'hypot') {
      return Math.hypot(args.INPUT1, args.INPUT2);
    } else if (args.MENU == 'imul') {
      return Math.imul(args.INPUT1, args.INPUT2);
    } else {
      return 0;
    }
  }
  mathOperatorStatic(args) {
      if (args.MENU == 'e ^') {
      return Math.E;
    } else if (args.MENU == 'LN10') {
      return Math.LN10;
    } else if (args.MENU == 'LN2') {
      return Math.LN2;
    } else if (args.MENU == 'LOG10E') {
      return Math.LOG10E;
    } else if (args.MENU == 'LOG2E') {
      return Math.LOG2E;
    } else if (args.MENU == 'PI') {
      return Math.PI;
    } else if (args.MENU == 'SQRT1 2') {
      return Math.SQRT1_2;
    } else if (args.MENU == 'SQRT2') {
      return Math.SQRT2;
    } else {
      return 0;
    }
  }
  pi(args) {
      return Math.PI
  }
  string(args) {
      return args.INPUT1
  }
  stringBool(args) {
      return args.INPUT1
  }
  replaceAll(args) {
      return args.STRING.replaceAll(args.REPLACE, args.REPLACEMENT)
  }
  radianToDegree(args) {
      return (args.INPUT1 * (Math.PI / 180));
  }
  itemSplit(args) {
      const arraySplit = (args.STRING.split(args.SPLIT))
      return arraySplit.at(args.INDEX - 1);
  }
  newLine(args) {
      return '\n';
  }
  tabCharacter(args) {
      return '	';
  }
  ifThenElseReporter(args) {
      if (args.BOOL) {
          return args.INPUT1
      } else {
          return args.INPUT2
      }
  }
  interpolate(args) {
      return Math.round(args.INPUT1 / args.INPUT2) * args.INPUT2;
  }
  colorConstant(args) {
      return args.INPUT1;
  }
  randomAngle(args) {
      return (Math.random() * (180 - -180)) + -180;
  }
}
Scratch.extensions.register(new operatorsExtension());
