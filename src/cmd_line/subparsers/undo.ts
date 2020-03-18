import { UndoCommand } from '../commands/undo';

export function parseUndoCommandArgs(): UndoCommand {
  return new UndoCommand();
}
