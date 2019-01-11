import { expect } from 'chai';

import { Position } from './position';
import { Cell } from './cell';

import { LivingCell }  from './livingcell';

describe('LivingCell', () => {

    beforeEach(function () {
    });

    it('can be created', () => {

        let cell = new LivingCell(
            new Position(1, 2)
        );

        expect(cell).to.be.instanceof(LivingCell);
        expect(cell).to.be.instanceof(Cell);

    });

    it('is alive', () => {

        let cell = new LivingCell(
            new Position(1, 2)
        );

        expect(cell.isAlive()).to.be.true;

    });

});
