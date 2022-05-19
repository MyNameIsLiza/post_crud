import {createStore, createEffect} from "effector";

const url = 'https://jsonplaceholder.typicode.com/posts';

const getPostsFx = createEffect(async () => {
    const response = await fetch(`${url}`);
    return await response.json();
});

const deletePostFx = createEffect(async (id) => {
    await fetch(`${url}/${id}`, {
        method: 'DELETE',
    });
    return id;
});

const addPostFx = createEffect(async (post) => {
    const response = await fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    return await response.json();
});

const editPostFx = createEffect(async (post) => {
    const response = await fetch(`${url}/${post.id}`, {
        method: 'PUT',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    return await response.json();
});

const replacePostFx = createEffect(async (post) => {
    const response = await fetch(`${url}/${post.id}`, {
        method: 'PATCH',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    return await response.json();
});

const $posts = createStore([])
    .on(getPostsFx.doneData, (list, res) => {
        return [...res]
    })
    .on(deletePostFx.doneData, (list, id) => {
        const shallowList = [...list];
        const index = shallowList.findIndex((item) => item.id === id);
        if (index !== -1) {
            shallowList.splice(index, 1);
        }
        return shallowList;
    })
    .on(addPostFx.doneData, (list, res) => {
        return [...list, res]
    })
    .on(editPostFx.doneData, (list, post) => {
        const shallowList = [...list];
        const index = shallowList.findIndex((item) => item.id === post.id);
        if (index !== -1) {
            shallowList[index] = post;
        }
        return shallowList;
    })
    .on(replacePostFx.doneData, (list, post) => {
        const shallowList = [...list];
        const index = shallowList.findIndex((item) => item.id === post.id);
        if (index !== -1) {
            shallowList[index] = post;
        }
        return shallowList;
    })

export {$posts, getPostsFx, deletePostFx, addPostFx, editPostFx, replacePostFx}
