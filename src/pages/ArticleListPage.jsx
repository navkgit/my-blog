import React from 'react'
import articles from './article-content'
import ArticleList from '../components/ArticleList'
function ArticleListPage() {
  return (
    <>
    <h1>Articles</h1>
    <ArticleList articles={articles} />
    </>
  )
}

export default ArticleListPage