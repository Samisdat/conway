/**
 * @jest-environment jsdom
 */

import {ZoomControl} from '../ControlZoom';
import {PanControl} from '../ControlPan';
import {CELL_WIDTH, PAN_TWEEN_STEPS, ZOOM_TWEEN_STEPS} from '../../Constants';
import {Position} from '../../Conway/Position';

describe('ControlPan', () => {

    let controllWrap: HTMLElement;
    let canvasWrap: HTMLElement;
    let canvas: HTMLCanvasElement;
    let panControl: PanControl;

    beforeEach(() => {

        canvasWrap = document.createElement('div');

        canvas = document.createElement('canvas');

        canvasWrap.append(
            canvas
        );

        controllWrap = document.createElement('div');
        const wrapElement = document.createElement('div');

        const zoomControl = new ZoomControl(
            document.createElement('div')
        );

        panControl = new PanControl(
            canvasWrap,
            controllWrap,
            CELL_WIDTH,
            zoomControl
        );

    });

    test('can be created', () => {

        expect(panControl).toBeInstanceOf(PanControl);

    });

    test('can click on left', () => {

        expect(panControl.getPan()).toStrictEqual(new Position(0, 0));

        const panLeft = controllWrap.getElementsByClassName('conway__control-pan__left')[0] as HTMLElement;

        panLeft.click();

        for (let y = 0; y < PAN_TWEEN_STEPS; y += 1) {
            panControl.update();
        }

        expect(panControl.getPan()).toStrictEqual(new Position(5, 0));
        expect('conway__control-pan--incactive').toBeTruthy();

    });

    test('can click on left beyond bound', () => {

        expect(panControl.getPan()).toStrictEqual(new Position(0, 0));

        const panLeft = controllWrap.getElementsByClassName('conway__control-pan__left')[0] as HTMLElement;

        for (let i = 0; i < 5; i += 1) {

            panLeft.click();

            for (let y = 0; y < PAN_TWEEN_STEPS; y += 1) {
                panControl.update();
            }

        }

        expect(panControl.getPan()).toStrictEqual(new Position(20, 0));
        expect(panLeft.classList.contains('conway__control-pan--incactive')).toBeTruthy();

    });

    test('can click on right', () => {

        expect(panControl.getPan()).toStrictEqual(new Position(0, 0));

        const panRight = controllWrap.getElementsByClassName('conway__control-pan__right')[0] as HTMLElement;
        panRight.click();

        for (let i = 0; i < PAN_TWEEN_STEPS; i += 1) {
            panControl.update();
        }

        expect(panControl.getPan()).toStrictEqual(new Position(-5, 0));

    });

    test('can click on top', () => {

        expect(panControl.getPan()).toStrictEqual(new Position(0, 0));

        const panTop = controllWrap.getElementsByClassName('conway__control-pan__top')[0] as HTMLElement;
        panTop.click();

        for (let i = 0; i < PAN_TWEEN_STEPS; i += 1) {
            panControl.update();
        }

        expect(panControl.getPan()).toStrictEqual(new Position(0, -5));

    });

    test('can click on bottom', () => {

        expect(panControl.getPan()).toStrictEqual(new Position(0, 0));

        const panBottom = controllWrap.getElementsByClassName('conway__control-pan__bottom')[0] as HTMLElement;
        panBottom.click();

        for (let i = 0; i < PAN_TWEEN_STEPS; i += 1) {
            panControl.update();
        }

        expect(panControl.getPan()).toStrictEqual(new Position(0, 5));

    });

    test('can click on center', () => {

        expect(panControl.getPan()).toStrictEqual(new Position(0, 0));

        const panBottom = controllWrap.getElementsByClassName('conway__control-pan__bottom')[0] as HTMLElement;
        panBottom.click();

        for (let i = 0; i < PAN_TWEEN_STEPS; i += 1) {
            panControl.update();
        }

        expect(panControl.getPan()).toStrictEqual(new Position(0, 5));

        const panCenter = controllWrap.getElementsByClassName('conway__control-pan__center')[0] as HTMLElement;
        panCenter.click();

        for (let i = 0; i < PAN_TWEEN_STEPS; i += 1) {
            panControl.update();
        }

        expect(panControl.getPan()).toStrictEqual(new Position(0, 0));

    });

    /*
    test('can handle mousedown', () => {

        expect(panControl.getPan()).toStrictEqual(new Position(0, 0));

        canvas.dispatchEvent(new MouseEvent( 'mousedown', {
            clientX: 10,
            clientY: 20
        }));

        expect(canvasWrap.classList.contains('mousedown')).toBeTruthy();


    });

    test('can handle mouseup', () => {

        expect(panControl.getPan()).toStrictEqual(new Position(0, 0));

        canvas.dispatchEvent(new MouseEvent( 'mousedown', {
            clientX: 10,
            clientY: 20
        }));

        expect(canvasWrap.classList.contains('mousedown')).toBeTruthy();

        canvas.dispatchEvent(new MouseEvent( 'mouseup', {
        }));

        expect(canvasWrap.classList.contains('mousedown')).toBeFalsy();


    });

    test('can handle mousemove', () => {

        expect(panControl.getPan()).toStrictEqual(new Position(0, 0));

        canvas.dispatchEvent(new MouseEvent( 'mousedown', {
            clientX: 500,
            clientY: 500
        }));

        expect(canvasWrap.classList.contains('mousedown')).toBeTruthy();

        canvas.dispatchEvent(new MouseEvent( 'mousemove', {
            clientX: 100,
            clientY: 100
        }));

        expect(panControl.getPan()).toStrictEqual(new Position(40,  40));

    });

    test('can handle mousemove without mousedown', () => {

        expect(panControl.getPan()).toStrictEqual(new Position(0, 0));

        expect(canvasWrap.classList.contains('mousedown')).toBeFalsy();

        canvas.dispatchEvent(new MouseEvent( 'mousemove', {
            clientX: 500,
            clientY: 500
        }));

        expect(panControl.getPan()).toStrictEqual(new Position(0,  0));

    });
    */

});
