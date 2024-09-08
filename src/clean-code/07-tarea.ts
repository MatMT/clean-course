(() => {

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) { }
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) {
        }
    }

    class InputEvents {
        constructor() { }

        setFocus() { };
        getValue() { };
        isActive() { };
        removeValue() { };
    }

    interface InputElementProps {
        id: string;
        type: HtmlType;
        value: string;
        placeholder: string;
    }

    //? Idea para la nueva clase InputElement}
    class InputElement {
        public attributes: InputAttributes;
        public events: InputEvents;
        public html: HtmlElement;

        constructor({ id, type, value, placeholder }: InputElementProps) {
            this.attributes = new InputAttributes(value, placeholder);
            this.events = new InputEvents();
            this.html = new HtmlElement(id, type);
        }
    }

    const nameField = new InputElement({
        id: '1', placeholder: 'Hola', type: 'input', value: 'Hola'
    });

    console.log(nameField);


})()