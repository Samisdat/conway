import * as $ from 'jquery';

export abstract class ControlAbstract {

    protected getControlElement(action: string, value: string, icon: string): JQuery {
        const element = $('<div>');
        element.addClass(value);
        element.attr('data-action', action);
        element.attr('data-value', value);
        element.append($('<i class="fa fa-' + icon + '">'));

        return element;
    }

    abstract createControl(): void;

    abstract addEventListener(): void;

    abstract update(): void;

}