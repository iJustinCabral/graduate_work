const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
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
  document.getElementById('sql').style.display = "none";
}
else {
  document.getElementById('sql').style.display = "block";
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

  if (nextTextNodeId === 6) {

      var string = document.getElementById('keyBox').value

      if (string === "135711131719") {
        state = Object.assign(state, option.setState)
        showTextNode(nextTextNodeId)
      }
      else {
        document.getElementById('keyBox').value = ''
        return startGame()
      }
  }

  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

function validate() {
  const username = document.getElementById('user').value
  if (username === "falken") {
    sqlFormElement.submit()
    return true
  }
  else {
    alert('Remember who you are....')
    document.getElementById('user').value  = ''
    return false
  }
}

const textNodes = [
  {
    id: 1,
    text: 'You have awoke in a strange room. To your left is a door, and to your right a radio on a small desk, with a mirror hanging on the wall above it',
        options: [
      {
        text: 'Check door',
        nextText: 2
      },
      {
        text: 'Turn on the radio',
        nextText: 3
      },
      {
        text: 'Look at mirror on wall',
        nextText: 4
      }
    ]
  },
  {
    id: 2,
    text: 'The door seems to be locked. There is a keypad on the side of the door',
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
    text: 'After turning on the radio you hear a message repeated: The SOURCE of truth will reveal your true self',
    options: [
      {
        text: 'Check door',
        nextText: 2
      },
      {
        text: 'Look at mirror on wall',
        nextText: 4
      },
      {
        text: 'Return to center of room',
        nextText: 1
      }
    ]
  },
  {
    id: 4,
    text: 'After looking at the mirror closely, you notice it is a touchscreen computer with the message:',
    options: [
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
  }
]

startGame()
