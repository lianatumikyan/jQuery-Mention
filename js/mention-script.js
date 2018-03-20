'use strict';
(function () {

    function init() {
        let elements = {
            textArea: $('.mention-box')
        };

        if(elements.textArea){
            let bind = bindEvents.bind(elements);
            bind();
        }
    }

    //fucntion detected the changes using .bind method
    function bindEvents() {
        $(this.textArea).on('keyup', function () {
            console.log('onevent');
        });
    }

    init();
})();
