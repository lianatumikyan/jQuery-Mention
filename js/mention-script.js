'use strict';
(function () {
    //fucntion detected the changes using .bind method
    function eventBind() {
        $('.mention-box').bind('keyup', function () {
            console.log("Onchange event");
        })
    }

    eventBind();
})();
