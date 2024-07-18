export const formatCommands = (commandList) => {
  let maxCommandLength = 0;
  commandList.forEach(({ command }) => {
    if (command.length > maxCommandLength) {
      maxCommandLength = command.length;
    }
  });

  return commandList.reduce((accumulator, { command, description }) => {
    const padding = maxCommandLength - command.length;
    let paddedCommand = command;
    for (let i = 0; i < padding; i++) {
      paddedCommand += ' ';
    }

    return accumulator + paddedCommand + ' - ' + description + '\n';
  }, '');
};

export const logPrefixForLevel = (level) => {
  switch (level) {
    case 0:
      return '';
    case 1:
      return 'warning:';
    case 2:
      return 'error:';
    default:
      return '(lldb)';
  }
};