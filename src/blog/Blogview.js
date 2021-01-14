import React,{Component,useState,useEffect} from 'react'
import superagent from 'superagent';
import './Blogview.css';
import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet";
const Blogview =() =>{
    const getBlog = async () => {
    const DEV_TO_URL = `https://dev.to/api/articles/fredysomy/${window.location.pathname.slice(1)}`
    
    try {
    const blog = superagent
      .get(DEV_TO_URL)
      .then(res => {
        return res.body
        })
        return blog
        } catch (error) {
        console.log("WE HAVE FETCH POST ERROR", error)
    }
    }
    const [blog,setBlog] =useState([])
    useEffect(()=>{
            getBlog().then(data =>{
                setBlog(data);
                
                document.getElementById("blogcontents").innerHTML=data.body_html.replace(/[\r]+/gm, "" );
            })
    },[]);
     function ScrollToTopOnMount() {

    window.scrollTo(0, 0);
  };
  function gotop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  

    
    return(
        
     <div class="crayons-article__main">
         <Helmet>
    <title>{blog.title}</title>
        </Helmet>
        <div class="crayons-article__body text-styles spec__body" data-article-id="563642" id="article-body">
            <div id="imgcontents">
      <img id="imgscrc" src={blog.cover_image}></img>
      <h1 style={{color:'white',textAlign:'left'}}><b>{blog.title}</b></h1>
      </div>
    
      <div  id="blogcontents">
            
      </div>
     
</div>
</div>
    )
  

}

export default Blogview;
