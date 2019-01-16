function takeANumber(currentLine, newName) {
  currentLine.push(newName);

  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.slice(0);
  }
  else {
    return "There is nobody waiting to be served!";
  }
}
