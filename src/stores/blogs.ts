import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBlogStore = defineStore('blog', ()=>{
  const blogs = ref([])
  const recents = ref([])
  const totalBlog = ref(0)
  const content = ref('')

  return {blogs, recents, totalBlog, content}
});
