
export default {
    storage(type) {
        if ( type === 'get' ) {
            if ( localStorage.getItem('todo-list') !== null ) {
                document.querySelector('.content__list').innerHTML = localStorage.getItem('todo-list');
            }
        } else if ( type === 'update' ) {
            const str = document.querySelector('.content__list').innerHTML;
            localStorage.setItem('todo-list', str);
        }
    },
};
