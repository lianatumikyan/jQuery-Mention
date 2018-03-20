'use strict';
(function () {
    //fucntion detected the changes using .bind method
    function bindEvents() {
        let self = this;
        $(this.textArea).on('keyup', function (e) {
            if(e.key === '@'){
                showUsers(self);
                }
        });
    }

    function showUsers(args) {
        console.log(args);
        let usersElem = args.showUsers,
            users = args.users;
        usersElem.empty();
        users = users.length > 10 ? users.slice(0, 10) : users;
        for (let i = 0; i < users.length; i++) {
            let name = users[i]['name'];
            usersElem.append('<div class="selectUser">' + name + '</div>');
        }
    }

    function init() {
        let variables = {
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

            if(variables.textArea){
                bindEvents.call(variables);
            }
    }

    init();
})();
