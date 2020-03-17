import { IUndoCommandArgs, UndoCommand } from '../commands/undo';

export function parseUndoCommandArgs(args: string): UndoCommand {
  return new UndoCommand();
}
