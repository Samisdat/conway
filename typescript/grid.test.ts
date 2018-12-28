import { expect } from 'chai';

import Position from './position';
import Canvas from './canvas';

import GridCell from './grid-cell';
import Grid from './grid';

import Habitat from './habitat';

import CheckerboardDark from './grid-cell-types/checkerboard-dark';
import CheckerboardLight from './grid-cell-types/checkerboard-light';
import LivingCell from './grid-cell-types/living-cell';

describe('Grid', () => {

    let habitat: Habitat;

    before(() => {

        habitat = new Habitat();

    });

    it.skip('odd number of cols and rows ', () => {

        let grid = new Grid(habitat, 300, 300, 100);

        expect(grid).to.be.instanceof(Grid);

        expect(grid.getWidth()).to.be.deep.equal(300);
        expect(grid.getHeight()).to.be.deep.equal(300);

        expect(grid.getCols()).to.be.equal(3);
        expect(grid.getRows()).to.be.equal(3);

        expect(grid.getOffset()).to.be.deep.equal(new Position(0, 0));

        const cells = grid.getCells();
        expect(cells.length).to.be.equal(9);

    });

    it.skip('odd number of cols and rows ', () => {

        let grid = new Grid(habitat, 320, 320, 100);

        expect(grid).to.be.instanceof(Grid);

        expect(grid.getWidth()).to.be.deep.equal(320);
        expect(grid.getHeight()).to.be.deep.equal(320);

        expect(grid.getCols()).to.be.equal(5);
        expect(grid.getRows()).to.be.equal(5);

        expect(grid.getOffset().x).to.be.closeTo(-0.9, 0.000000000000001);
        expect(grid.getOffset().y).to.be.closeTo(-0.9, 0.000000000000001);

        const cells = grid.getCells();
        expect(cells.length).to.be.equal(25);

    });

    it.skip('even number of cols and rows ', () => {

        let grid = new Grid(habitat, 400, 400, 100);

        expect(grid).to.be.instanceof(Grid);

        expect(grid.getWidth()).to.be.deep.equal(400);
        expect(grid.getHeight()).to.be.deep.equal(400);

        expect(grid.getCols()).to.be.equal(5);
        expect(grid.getRows()).to.be.equal(5);

        expect(grid.getOffset()).to.be.deep.equal(new Position(-0.5, -0.5));

        const cells = grid.getCells();
        expect(cells.length).to.be.equal(25);

    });

    it.skip('even number of cols and rows ', () => {

        let grid = new Grid(habitat, 420, 420, 100);

        expect(grid).to.be.instanceof(Grid);

        expect(grid.getWidth()).to.be.deep.equal(420);
        expect(grid.getHeight()).to.be.deep.equal(420);

        expect(grid.getCols()).to.be.equal(5);
        expect(grid.getRows()).to.be.equal(5);

        expect(grid.getOffset().x).to.be.closeTo(-0.4, 0.000000000000001);
        expect(grid.getOffset().y).to.be.closeTo(-0.4, 0.000000000000001);

        const cells = grid.getCells();
        expect(cells.length).to.be.equal(25);

    });

    it.skip('3 cols and 3 rows without offset ', () => {

        let grid = new Grid(habitat, 300, 300, 100);

        expect(grid).to.be.instanceof(Grid);

        expect(grid.getWidth()).to.be.deep.equal(300);
        expect(grid.getHeight()).to.be.deep.equal(300);

        expect(grid.getCols()).to.be.equal(3);
        expect(grid.getRows()).to.be.equal(3);

        expect(grid.getOffset()).to.be.deep.equal(new Position(0, 0));

        const cells = grid.getCells();
        expect(cells.length).to.be.equal(9);

    });

    it.skip('has checkerboard pattern', () => {

        let grid = new Grid(habitat, 300, 300, 100);

        expect(grid.getCell(-1, -1).getType().name).to.be.equal('checkerboard-light');
        expect(grid.getCell(-1, 0).getType().name).to.be.equal('checkerboard-dark');
        expect(grid.getCell(-1, 1).getType().name).to.be.equal('checkerboard-light');

        expect(grid.getCell(0, -1).getType().name).to.be.equal('checkerboard-dark');
        expect(grid.getCell(0, 0).getType().name).to.be.equal('checkerboard-light');
        expect(grid.getCell(0, 1).getType().name).to.be.equal('checkerboard-dark');

        expect(grid.getCell(1, -1).getType().name).to.be.equal('checkerboard-light');
        expect(grid.getCell(1, 0).getType().name).to.be.equal('checkerboard-dark');
        expect(grid.getCell(1, 1).getType().name).to.be.equal('checkerboard-light');

    });

    it.skip('has moving checkerboard pattern', () => {

        let grid = new Grid(habitat, 300, 300, 100, new Position(1, 0));

        expect(grid.getCell(-1, -1).getType().name).to.be.equal('checkerboard-dark');
        expect(grid.getCell(-1, 0).getType().name).to.be.equal('checkerboard-light');
        expect(grid.getCell(-1, 1).getType().name).to.be.equal('checkerboard-dark');

        expect(grid.getCell(0, -1).getType().name).to.be.equal('checkerboard-light');
        expect(grid.getCell(0, 0).getType().name).to.be.equal('checkerboard-dark');
        expect(grid.getCell(0, 1).getType().name).to.be.equal('checkerboard-light');

        expect(grid.getCell(1, -1).getType().name).to.be.equal('checkerboard-dark');
        expect(grid.getCell(1, 0).getType().name).to.be.equal('checkerboard-light');
        expect(grid.getCell(1, 1).getType().name).to.be.equal('checkerboard-dark');

        grid = new Grid(habitat, 300, 300, 100, new Position(2, 0));

        expect(grid.getCell(-1, -1).getType().name).to.be.equal('checkerboard-light');
        expect(grid.getCell(-1, 0).getType().name).to.be.equal('checkerboard-dark');
        expect(grid.getCell(-1, 1).getType().name).to.be.equal('checkerboard-light');

        expect(grid.getCell(0, -1).getType().name).to.be.equal('checkerboard-dark');
        expect(grid.getCell(0, 0).getType().name).to.be.equal('checkerboard-light');
        expect(grid.getCell(0, 1).getType().name).to.be.equal('checkerboard-dark');

        expect(grid.getCell(1, -1).getType().name).to.be.equal('checkerboard-light');
        expect(grid.getCell(1, 0).getType().name).to.be.equal('checkerboard-dark');
        expect(grid.getCell(1, 1).getType().name).to.be.equal('checkerboard-light');

        grid = new Grid(habitat, 300, 300, 100, new Position(1, 1));

        expect(grid.getCell(-1, -1).getType().name).to.be.equal('checkerboard-light');
        expect(grid.getCell(-1, 0).getType().name).to.be.equal('checkerboard-dark');
        expect(grid.getCell(-1, 1).getType().name).to.be.equal('checkerboard-light');

        expect(grid.getCell(0, -1).getType().name).to.be.equal('checkerboard-dark');
        expect(grid.getCell(0, 0).getType().name).to.be.equal('checkerboard-light');
        expect(grid.getCell(0, 1).getType().name).to.be.equal('checkerboard-dark');

        expect(grid.getCell(1, -1).getType().name).to.be.equal('checkerboard-light');
        expect(grid.getCell(1, 0).getType().name).to.be.equal('checkerboard-dark');
        expect(grid.getCell(1, 1).getType().name).to.be.equal('checkerboard-light');

    });

    it('has moving checkerboard pattern', () => {

        let grid: Grid;
        /*
        grid = new Grid(habitat, 3, 1, 1, new Position(-2, 0));

        expect(grid.getCols()).to.be.equal(3);
        expect(grid.getRows()).to.be.equal(1);

        expect(grid.getCell(-1, 0).getType().name).to.be.equal('checkerboard-dark');
        expect(grid.getCell(0, 0).getType().name).to.be.equal('checkerboard-light');
        expect(grid.getCell(1, 0).getType().name).to.be.equal('checkerboard-dark');

        grid = new Grid(habitat, 3, 1, 1, new Position(-1, 0));

        expect(grid.getCols()).to.be.equal(3);
        expect(grid.getRows()).to.be.equal(1);

        expect(grid.getCell(-1, 0).getType().name).to.be.equal('center');
        expect(grid.getCell(0, 0).getType().name).to.be.equal('checkerboard-dark');
        expect(grid.getCell(1, 0).getType().name).to.be.equal('checkerboard-light');

        grid = new Grid(habitat, 3, 1, 1, new Position(0, 0));

        expect(grid.getCols()).to.be.equal(3);
        expect(grid.getRows()).to.be.equal(1);

        expect(grid.getCell(-1, 0).getType().name).to.be.equal('checkerboard-dark');
        expect(grid.getCell(0, 0).getType().name).to.be.equal('center');
        expect(grid.getCell(1, 0).getType().name).to.be.equal('checkerboard-dark');
        */
        grid = new Grid(habitat, 3, 1, 1, new Position(1, 0));

        expect(grid.getCols()).to.be.equal(3);
        expect(grid.getRows()).to.be.equal(1);

        expect(grid.getZero()).to.be.deep.equal(new Position(1, 0));

        expect(grid.getCell(-1, 0).getType().name).to.be.equal('checkerboard-light');
        expect(grid.getCell(0, 0).getType().name).to.be.equal('checkerboard-dark');
        expect(grid.getCell(1, 0).getType().name).to.be.equal('center');

        expect(grid.getCell(-1, 0).relativePosition).to.deep.equal(new Position(-1, 0));
        expect(grid.getCell(0, 0).relativePosition).to.deep.equal(new Position(0, 0));
        expect(grid.getCell(1, 0).relativePosition).to.deep.equal(new Position(1, 0));

        expect(grid.getCell(-1, 0).absolutePosition).to.deep.equal(new Position(-2, 0));
        expect(grid.getCell(0, 0).absolutePosition).to.deep.equal(new Position(-1, 0));
        expect(grid.getCell(1, 0).absolutePosition).to.deep.equal(new Position(0, 0));

        /*
        grid = new Grid(habitat, 3, 1, 1, new Position(2, 0));

        expect(grid.getCols()).to.be.equal(3);
        expect(grid.getRows()).to.be.equal(1);

        expect(grid.getCell(-1, 0).getType().name).to.be.equal('checkerboard-dark');
        expect(grid.getCell(0, 0).getType().name).to.be.equal('checkerboard-light');
        expect(grid.getCell(1, 0).getType().name).to.be.equal('checkerboard-dark');
        */
    });

    it.skip('it has one living cell after seeding one', () => {

        expect(habitat.getAllCells()).to.be.deep.equal([]);

        habitat.seed(
            new Position(0, 0)
        );

        expect(habitat.get()).to.be.deep.equal([new Position(0, 0)]);

        let grid = new Grid(habitat, 300, 300, 100);

        expect(grid.getOffset()).to.be.deep.equal(new Position(0, 0));

        const cells = grid.getCells();
        expect(cells.length).to.be.equal(9);

        let countLiving = 0;
        for (let cell of cells) {

            if ('living' === cell.getType().name) {
                countLiving += 1;
                expect(cell.x).to.be.deep.equal(0);
                expect(cell.y).to.be.deep.equal(0);

            }
        }

        expect(countLiving).to.be.equal(1);

    });

});