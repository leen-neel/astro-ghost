import GhostContentAPI from '@tryghost/content-api';

// Create API instance with site credentials
const api = new GhostContentAPI({
    url: 'http://localhost:2368',
    key: 'ccce3cdb9914f77bd40fa90efa',
    version: 'v5.0',
});

export async function getPosts() {
    return await api.posts
        .browse({
            limit: 'all',
        })
        .catch((err) => {
            console.error(err);
        });
}

export async function getPost(slug) {
    return await api.posts.browse({
        filter: `slug:${slug}`,
    });
}

export { api };
