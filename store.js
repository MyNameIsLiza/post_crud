import {createStore} from "effector";

const url = 'https://jsonplaceholder.typicode.com/posts';

const $posts = createStore([])

export {$posts}
