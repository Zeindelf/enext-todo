
import Storage from './_todo__storage.js';
import { reverse } from './../../utils/helpers.js';

 export default {
    addTask(task) {
        const newTask = document.createElement('li');
        newTask.setAttribute('class', 'content__task');
        // newTask.innerHTML = '<p>' + task + '</p><a href="#" class="content__task--remove">Remove</a>';
        newTask.innerHTML = `
            <p>${reverse(task)}</p>
            <a href="#" class="content__task--remove">Remove</a>
        `;

        const list = document.querySelector('.content__list ul');
        list.appendChild(newTask);
    },

    removeTask(task) {
        task.style.opacity = 0;
        task.remove();
        Storage.storage('update');
    },

    completeTask(task) {
        task.classList.toggle('content__task--complete');
        Storage.storage('update');
    },
};
