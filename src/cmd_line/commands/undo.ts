import { CommandBase, ICommandArgs} from '../node';
import { VimState } from '../../state/vimState';

export interface IUndoCommandArgs extends ICommandArgs {
  steps: number,
}

export class UndoCommand extends CommandBase {
  async execute(vimState: VimState): Promise<void> {
    vimState.historyTracker.goBackHistoryStep();
  }
}
