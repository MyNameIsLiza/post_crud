import {createStore, createEffect} from "effector";

const url = 'https://jsonplaceholder.typicode.com/posts';

const getPostsFx = createEffect(async () => {
    const response = await fetch(`${url}`);
    return await response.json();
});

const $posts = createStore([])
    .on(getPostsFx.doneData, (list, res) => {
        return [...res]
    })

export {$posts, getPostsFx}
