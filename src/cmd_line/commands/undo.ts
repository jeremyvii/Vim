import { CommandBase, ICommandArgs } from '../node';
import { VimState } from '../../state/vimState';
import { StatusBar } from '../../statusBar';
import { Range } from '../../common/motion/range';

export interface IUndoCommandArguments extends ICommandArgs {
  change: number;
}

export class UndoCommand extends CommandBase {
  protected _arguments: IUndoCommandArguments;

  constructor(args: IUndoCommandArguments) {
    super();
    this._arguments = args;
  }

  get arguments(): IUndoCommandArguments {
    return this._arguments;
  }

  async execute(vimState: VimState): Promise<void> {
    const { change } = this.arguments;

    console.log(change);

    const newPositions = vimState.historyTracker.getChangePositionAtIndex(change + 1);
    vimState.historyTracker.undoAndRemoveChanges(change);

    if (newPositions === undefined) {
      StatusBar.setText(vimState, 'Already at oldest change');
    } else {
      vimState.cursors = newPositions.map(x => new Range(x, x));
    }

    vimState.alteredHistory = true;
  }
}
