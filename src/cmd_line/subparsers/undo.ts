import { IUndoCommandArguments, UndoCommand } from '../commands/undo';
import { Scanner } from '../scanner';

export function parseUndoCommandArgs(args: string): UndoCommand {
  const scannedArgs: IUndoCommandArguments = {
    // Only go back a single step if no arguments were received.
    change: 1,
  };

  const scanner = new Scanner(args);

  scanner.skipWhiteSpace();
  let number = scanner.remaining();

  if (/([\d]+)/.test(number)) {
    scannedArgs.change = Number(number);
  }

  return new UndoCommand(scannedArgs);
}
