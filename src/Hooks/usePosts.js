import {useMemo} from "react"


export const useSortedPosts = (posts, sort) =>{
    const GetSortedPosts = () =>
    {
      if(sort) return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
      else return posts
    }

    const resalt = useMemo(GetSortedPosts, [sort, posts])
    return resalt
   
} 

export const usePosts = (posts, sort, query) =>{

    const sortedPosts = useSortedPosts(posts, sort)

    const getSortedAndSearchedPosts = () =>
    {
      if(query) return [...sortedPosts].filter(post => post.title.toLowerCase().includes(query.toLowerCase())
                                                    || post.body.toLowerCase().includes(query.toLowerCase()))
      else return sortedPosts
    }
  
    const resalt = useMemo(getSortedAndSearchedPosts, [query, sortedPosts])
    return resalt
}