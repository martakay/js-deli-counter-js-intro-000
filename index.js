function takeANumber(currentLine, newName) {
  currentLine.push(newName);

  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
    katzDeliLine.shift();
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(currentLine) {
  if ( currentLine.length > 0 ) {
    for (var i = 0; i < currentLine.length; i++) {
      // return `The line is currently: ${i}. ${currentLine[i]}`
      return `The line is currently: ${currentLine.join(', ')}`

    }
  }
  else {
    return "The line is currently empty."
  }
}
