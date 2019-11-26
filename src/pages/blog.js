import React from 'react';
import Layout from '../components/Layout/layout';
import Aside from '../components/Aside/aside';

const Blog = ({children, path}) => {
    console.log('path: ', path);
    return (
        <Layout>
            <div className='blog-wrap' style={{display: 'flex'}}>
                <Aside activePath={path}/>
                <main className="blog-post" style={{padding: '30px',  width: '960px', marginLeft: '100px'}}>
                    {
                        !children &&
                        <div>
                            <h4>该系列为笔记</h4>
                            <article>
                                <p> 从coding中总结的知识点，记录下来，</p>
                                <p>包括但不限于javascript、css、liunx等。</p>
                            </article>
                        </div>
                    }
                    {children}
                </main>
            </div>
        </Layout>
    )
};
export default Blog;
