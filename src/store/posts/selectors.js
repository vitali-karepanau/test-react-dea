export const selectPosts = state => state.posts.data;
export const selectPost = (state, index) => state.posts.data[index];
export const selectCurrentPageIndex = state => state.posts.currentPage;
export const selectPageCount = state => state.posts.pageCount;
