'use strict';
(function () {
    //fucntion detected the changes using .bind method
    function bindEvents()
    {
        $(this).find('.mention-box').on('keyup', function () {
            console.log('onevent');
        });
    }
    bindEvents.bind(this);
})();
