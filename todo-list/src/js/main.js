
// import todo from './modules/Todo/todo-index.js'

// document.addEventListener('DOMContentLoaded', () => {
//     todo.init();
// });


;(function() {
    function storage (type) {
        if ( type === 'get' ) {
            if ( localStorage.getItem('todo-list') !== null ) {
                document.querySelector('.content__list').innerHTML = localStorage.getItem('todo-list');
            }
        } else if ( type === 'update' ) {
            var str = document.querySelector('.content__list').innerHTML;
            localStorage.setItem('todo-list', str);
        }
    }

    function addTask (task) {
        var newTask = document.createElement('li');
        newTask.setAttribute('class', 'content__task');
        newTask.innerHTML = '<p>' + task + '</p><a href="#" class="content__task--remove">Remove</a>';

        var list = document.querySelector('.content__list ul');
        list.appendChild(newTask);
    }

    function removeTask (task) {
        task.style.opacity = 0;
        task.remove();
        storage('update');
    }

    function completeTask (task) {
        task.classList.toggle('content__task--complete');
        storage('update');
    }

    function init () {
        storage('get');

        document.querySelector('.content__insert input').addEventListener('keyup', function(ev) {
            if ( ev.which === 13 && this.value !== '' ) {
                addTask(this.value);
                storage('update');
                this.value = '';
            }
        }, false);

        document.querySelector('.content__list').addEventListener('click', function(ev) {
            if ( ev.target.classList.contains('content__task--remove') ) {
                ev.preventDefault();
                removeTask(ev.target.parentNode);

            } else if ( ev.target.classList.contains('content__task') ) {
                completeTask(ev.target);
            }
        }, false);
    }

    document.addEventListener('DOMContentLoaded', function () {
        init();
    });
})();
