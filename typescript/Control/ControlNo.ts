import {Position} from '../Conway/Position';
import {ControlInterface} from './ControlInterface';

export class NoControl implements ControlInterface {

    getZoom(): number {
        return 1;
    }

    getPan(): Position {
        return new Position(0, 0);
    }

    update(): void {

    }

}
