const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const codeBoxElement = document.getElementById('codeBox')
const keyBoxElement = document.getElementById('keyBox')
const sqlFormElement = document.getElementById('sqlForm')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text

  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  if (textNodeIndex != 2) {
   document.getElementById('keyBox').style.display = "none";
 }
 else {
   document.getElementById('keyBox').style.display = "block";
 }

 if (textNodeIndex != 4) {
  document.getElementById('codeBox').style.display = "none";
}
else {
  document.getElementById('codeBox').style.display = "block";
}

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText

  if (nextTextNodeId <= 0) {
    return startGame()
  }

// Check if the password to leave the room is correct
  if (nextTextNodeId === 6) {
      // Check the value of the input box, if the keycode is correct, send them along their way
      // If not, send them to the the start of the room
      var string = document.getElementById('keyBox').value

      if (string === "SQLinj3ct10Ns") {
        state = Object.assign(state, option.setState)
        showTextNode(nextTextNodeId)
      }
      else {
        document.getElementById('keyBox').value = ''
        alert("You've blacked out and lost your memory...")
        return startGame()
      }
  }

// Check if the laptop password is correct
  if (nextTextNodeId === 5) {
      var string = document.getElementById('codeBox').value

      if (string === "135711131719") {
        state = Object.assign(state, option.setState)
        showTextNode(nextTextNodeId)
      }
      else {
        document.getElementById('codeBox').value = ''
        return startGame()
      }
  }

// Submit the php form to get the URL for them to use with SQL map
  if (nextTextNodeId === 7) {
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
    document.getElementById('sqlForm').submit();

  }

  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

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
    text: 'Congratulations!! You escaped the room. Heres the flag: {{flag}}',
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
