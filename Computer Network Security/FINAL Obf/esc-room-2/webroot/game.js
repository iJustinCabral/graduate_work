const _0x16dbca=_0x4cf0;(function(_0x43879f,_0x4471b1){const _0x3e1200=_0x4cf0,_0x1638de=_0x43879f();while(!![]){try{const _0x522a38=parseInt(_0x3e1200(0x15e))/0x1+parseInt(_0x3e1200(0x15a))/0x2*(-parseInt(_0x3e1200(0x16a))/0x3)+-parseInt(_0x3e1200(0x14c))/0x4*(parseInt(_0x3e1200(0x167))/0x5)+-parseInt(_0x3e1200(0x15c))/0x6+-parseInt(_0x3e1200(0x154))/0x7+-parseInt(_0x3e1200(0x156))/0x8+parseInt(_0x3e1200(0x16e))/0x9;if(_0x522a38===_0x4471b1)break;else _0x1638de['push'](_0x1638de['shift']());}catch(_0x4e5587){_0x1638de['push'](_0x1638de['shift']());}}}(_0x1590,0x73836));const textElement=document[_0x16dbca(0x152)]('text'),optionButtonsElement=document[_0x16dbca(0x152)](_0x16dbca(0x15b)),codeBoxElement=document[_0x16dbca(0x152)]('codeBox'),keyBoxElement=document[_0x16dbca(0x152)]('keyBox'),sqlFormElement=document['getElementById'](_0x16dbca(0x169));let state={};function startGame(){state={},showTextNode(0x1);}function showTextNode(_0x354409){const _0x4548fd=_0x16dbca,_0x357408=textNodes[_0x4548fd(0x159)](_0x1eb2d3=>_0x1eb2d3['id']===_0x354409);textElement[_0x4548fd(0x16d)]=_0x357408['text'];while(optionButtonsElement[_0x4548fd(0x16b)]){optionButtonsElement['removeChild'](optionButtonsElement['firstChild']);}_0x354409!=0x2?document['getElementById']('keyBox')[_0x4548fd(0x150)][_0x4548fd(0x162)]=_0x4548fd(0x157):document[_0x4548fd(0x152)]('keyBox')['style'][_0x4548fd(0x162)]='block',_0x354409!=0x4?document[_0x4548fd(0x152)](_0x4548fd(0x151))[_0x4548fd(0x150)][_0x4548fd(0x162)]=_0x4548fd(0x157):document[_0x4548fd(0x152)](_0x4548fd(0x151))[_0x4548fd(0x150)][_0x4548fd(0x162)]=_0x4548fd(0x164),_0x357408['options'][_0x4548fd(0x14d)](_0x37bcd1=>{const _0x431beb=_0x4548fd;if(showOption(_0x37bcd1)){const _0x1b89e2=document[_0x431beb(0x165)](_0x431beb(0x14e));_0x1b89e2[_0x431beb(0x16d)]=_0x37bcd1[_0x431beb(0x160)],_0x1b89e2[_0x431beb(0x163)][_0x431beb(0x166)]('btn'),_0x1b89e2[_0x431beb(0x161)](_0x431beb(0x16c),()=>selectOption(_0x37bcd1)),optionButtonsElement[_0x431beb(0x15f)](_0x1b89e2);}});}function _0x1590(){const _0x2a1555=['style','codeBox','getElementById','setState','231364kIIiFB','135711131719','160000WeFdRa','none','keyBox','find','18124LLIaVR','option-buttons','59646FSXvXi','SQLinj3ct10Ns','549135hTQpDL','appendChild','text','addEventListener','display','classList','block','createElement','add','10eLkawO','value','sqlForm','9JbpiVv','firstChild','click','innerText','1209636piTLUD','requiredState','240436gSUXOy','forEach','button','assign'];_0x1590=function(){return _0x2a1555;};return _0x1590();}function _0x4cf0(_0x5e2598,_0x16010a){const _0x15907d=_0x1590();return _0x4cf0=function(_0x4cf0ea,_0x5be150){_0x4cf0ea=_0x4cf0ea-0x14b;let _0x420454=_0x15907d[_0x4cf0ea];return _0x420454;},_0x4cf0(_0x5e2598,_0x16010a);}function showOption(_0x4e4fc2){const _0x38015a=_0x16dbca;return _0x4e4fc2[_0x38015a(0x14b)]==null||_0x4e4fc2[_0x38015a(0x14b)](state);}function selectOption(_0xe7fd16){const _0x557b20=_0x16dbca,_0x1de20f=_0xe7fd16['nextText'];if(_0x1de20f<=0x0)return startGame();if(_0x1de20f===0x6){var _0x3fd01d=document[_0x557b20(0x152)](_0x557b20(0x158))[_0x557b20(0x168)];if(_0x3fd01d===_0x557b20(0x15d))state=Object[_0x557b20(0x14f)](state,_0xe7fd16['setState']),showTextNode(_0x1de20f);else return document['getElementById'](_0x557b20(0x158))[_0x557b20(0x168)]='',alert('You\x27ve\x20blacked\x20out\x20and\x20lost\x20your\x20memory...'),startGame();}if(_0x1de20f===0x5){var _0x3fd01d=document[_0x557b20(0x152)]('codeBox')['value'];if(_0x3fd01d===_0x557b20(0x155))state=Object[_0x557b20(0x14f)](state,_0xe7fd16['setState']),showTextNode(_0x1de20f);else return document[_0x557b20(0x152)](_0x557b20(0x151))[_0x557b20(0x168)]='',startGame();}_0x1de20f===0x7&&(state=Object[_0x557b20(0x14f)](state,_0xe7fd16['setState']),showTextNode(_0x1de20f),document['getElementById'](_0x557b20(0x169))['submit']()),state=Object[_0x557b20(0x14f)](state,_0xe7fd16[_0x557b20(0x153)]),showTextNode(_0x1de20f);}

const textNodes = [
  {
    id: 1,
    text: 'You made it to a new room which is quite dark. You can make out a door to the north, a paper in the center of the floor and a laptop next to it',
        options: [
      {
        text: 'Check door',
        nextText: 2
      },
      {
        text: 'Pick up the paper',
        nextText: 3
      },
      {
        text: 'Turn on laptop',
        nextText: 4
      }
    ]
  },
  {
    id: 2,
    text: 'The door seems to be locked. There is a keypad on the side of the door with a note that reads: WARNING! Wrong code results in loss of memory.',
    options: [
      {
        text: 'Submit Keycode',
        nextText: 6
      },
      {
        text: 'Return to center of room',
        nextText: 1
      }
    ]
  },
  {
    id: 3,
    text: 'The paper has a drawing of a pirate Map, and where an apparent treasure would be, the letters SQL are marked inside an image of a --dump truck.',
    options: [
      {
        text: 'Check door',
        nextText: 2
      },
      {
        text: 'Turn on laptop',
        nextText: 4
      },
      {
        text: 'Return to center of room',
        nextText: 1
      }
    ]
  },
  {// Will show the log in here that requires the passcode from the previous challenge
    id: 4,
    text: 'The laptop has a log in screen that requires a password.',
    options: [
      {
        // If correct this will unlock the door and present the leave room
        text: 'Submit password',
        nextText: 5
      },
      {
        text: 'Return to center of room',
        nextText: 1
      }
    ]
  },
  {
    id: 5,
    text: 'There are no applications on the computer, only a desktop wallpaper with text that reads: URLs are the KEY to a new world',
    options: [
      {
        // this will give them the correct URL for the form submission
        text: 'Mash the keyboard',
        nextText: 7
      },
      {
        text: 'Return to center of room',
        nextText: 1
      }
    ]
  },
  {
    id: 6,
    text: '{{flag}}',
    options: [
      {
        text: 'Congratulations. Play Again',
        nextText: -1
      }
    ]
  },
  {
    id: 7,
    text: 'zJ:KDFJ:SDFIS:DUIFdfadf /submit.php?id=1 :LSKDFJL:KSJDFidjf;kadsjf4r2752-307523-0742-304uwel;rjwsdlfjsdlkf..........................the laptop shut off',
    options: [
      {
        text: 'Return to center of room',
        nextText: 1
      }
    ]
  }
]

startGame()
