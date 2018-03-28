'use strict';
(function () {
    //function detected the changes using .bind method
    function bindEvents() {
        let getPos = getPosition.bind(this);
        $(this.textArea).on('keyup click', getPos);
    }

    function getPosition(e) {
        let position = $(this).prop("selectionStart");
        if(e.key === '@'){
            showUsers.call(this);
        }
    }

    function showUsers() {
        let usersElem = this.showUsers,
            users = this.users;
        users = users.length > 10 ? users.slice(0, 10) : users;
        for (let i = 0; i < users.length; i++) {
            usersElem.append('<div class="selectUser">' + users[i]['name'] + '</div>');
        }
    }

    function init() {
        let defaults = {
            users: [
                {
                    name: 'Jewel',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '1'
                },
                {
                    name: 'Ren',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '2'
                },
                {
                    name: 'Sonny',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '3'
                },
                {
                    name: 'Lillian',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '4'
                },
                {
                    name: 'Alinta',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '5'
                },
                {
                    name: 'Athalie',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '6'
                },
                {
                    name: 'Ederne',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '7'
                },
                {
                    name: 'Eduardo',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '8'
                },
                {
                    name: 'Jessica',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '9'
                },
                {
                    name: 'Medea',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '10'
                },
                {
                    name: 'Svetlana',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '11'
                },
                {
                    name: 'Erick',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '12'
                },
                {
                    name: 'Laura',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '13'
                }
            ],
            textArea: $('.mention-box'),
            showUsers: $('.showUsers')
             };

            if(defaults.textArea){
                bindEvents.call(defaults);
            }
    }

    init();
})();
