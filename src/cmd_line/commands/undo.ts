import { CommandBase } from '../node';
import { VimState } from '../../state/vimState';
import { StatusBar } from '../../statusBar';
import { Range } from '../../common/motion/range';

export class UndoCommand extends CommandBase {
  async execute(vimState: VimState): Promise<void> {
    const newPositions = await vimState.historyTracker.goBackHistoryStep();

    if (newPositions === undefined) {
      StatusBar.setText(vimState, 'Already at oldest change');
    } else {
      vimState.cursors = newPositions.map(x => new Range(x, x));
    }

    vimState.alteredHistory = true;
  }
}
