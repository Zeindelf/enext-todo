
import Storage from './_todo__storage.js';
import Tasks from './_todo__tasks.js';

const Methods = {
    init() {
        Methods.createTasks();
    },

    createTasks() {
        Storage.storage('get');

        document.querySelector('.content__insert input').addEventListener('keyup', (ev) => {
            const $this = ev.target
            if ( ev.which === 13 && $this.value !== '' ) {
                Tasks.addTask($this.value);
                Storage.storage('update');
                $this.value = '';
            }
        }, false);

        document.querySelector('.content__list').addEventListener('click', (ev) => {
            if ( ev.target.classList.contains('content__task--remove') ) {
                ev.preventDefault();
                Tasks.removeTask(ev.target.parentNode);

            } else if ( ev.target.classList.contains('content__task') ) {
                Tasks.completeTask(ev.target);
            }
        }, false);
    },
};

export default {
    init: Methods.init,
};
