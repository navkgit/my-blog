import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import articles from "./article-content"
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';
import AddCommentForm from '../components/AddCommentForm';
import useUser from '../hooks/useUser';

function ArticlePage() {
  const {user,isLoading} = useUser();
  const [articleInfo,setArticleInfo] = useState({upvotes:0, comments:[], canUpVote:false});
  const {canUpVote} = articleInfo;
  const {articleId} = useParams();
    
    useEffect(()=>{
      async function LoadArticleInfo(){
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        const response = await axios.get(`/api/articles/${articleId}`, { headers });
        const newArticleInfo = response.data;
        setArticleInfo(newArticleInfo);
      }
      if (!isLoading) {
        LoadArticleInfo();
    }
    }, [isLoading, user, articleId]);
    
    const article = articles.find(article => article.name === articleId)

    const addUpvotes=async ()=>{
       const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        const response = await axios.put(`/api/articles/${articleId}/upvote`, null, { headers });
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }
    if(!article){
    return <NotFoundPage/>
    }

  return (
    <>
        <h1>{article.title}</h1>
        <div className='upvotes-section'>
          {user ? <button onClick={addUpvotes}>{canUpVote ? 'Upvote' : 'Already Upvoted'}</button>
                : <button>Log In to Upvote</button>}
          
          <p>This article has {articleInfo.upvotes} upvote(s)</p>
        </div>

        {article.content.map((para,i) => (<p key={i}>{para}</p>))}
        
        {user
            ? <AddCommentForm
                articleName={articleId}
                onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)} />
            : <button>Log in to add a comment</button>}

        <CommentsList comments={articleInfo.comments} />
    </>
  )
}

export default ArticlePage