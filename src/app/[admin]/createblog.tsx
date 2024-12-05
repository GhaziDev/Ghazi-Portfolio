"use client";
import { useState ,useEffect} from "react";

import { Blog } from "../interfaces/interfaces";
import { BlogModel } from "../models/Blog";

import slugify from "slugify";

import ReactMarkdown from "react-markdown";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import rehypeSlugger from 'rehype-slug';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkOembed from 'remark-oembed';
import remarkPrettier from 'remark-prettier';
import remarkRehype from 'remark-rehype';
import remarkToc from 'remark-toc';


import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';


// next step, now it is time to write your description in markdown.
// then make a good ui for the page
// then prepare the blog section in main page, no need for modals, separate pages are totally fine
// you need to have a fast decision regarding ui and ux
// make small changes on the website
// choose an image for header section

//deploy, and upload a new blog.

// share your website


type MarkdownRendererProps = {
  children: string;
};

export function MarkdownRenderer({ children: markdown }: MarkdownRendererProps) {
  return (
    <ReactMarkdown

    className='markdown'

    remarkPlugins={[
      remarkGfm,
      remarkMath,
      remarkToc,
      remarkRehype,
      remarkGemoji,
    ]}

    rehypePlugins={[rehypeRaw,rehypeKatex, rehypeSlugger,[rehypeHighlight,{ignoreMissing:true}]]}

    components={{
      code({ node, inline, className, children, ...props }: any) {
        console.log("Raw children:", children);
    
        const match = /language-(\w+)/.exec(className || "");
        let codeContent;
    
        // Extract content by filtering out React elements and joining strings
        codeContent = children
          .map((child: any) => {
            if (typeof child === "string") return child; // Direct strings
            if (typeof child === "object" && child?.props?.children) {
              return child.props.children; // Extract nested content from React elements
            }
            return ""; // Fallback for unexpected types
          })
          .join("");
    
        if (!inline && match) {
          return (
            <SyntaxHighlighter
              style={dracula}
              PreTag="div"
              language={match[1]}
              {...props}
            >
              {codeContent.trim()}
            </SyntaxHighlighter>
          );
        }
    
        return (
          <code className={className} {...props}>
            {codeContent}
          </code>
        );
      },
    }}
    >
      {markdown}
    </ReactMarkdown>
  );
}

export default function CreateBlog() {


  const [blog, setBlog] = useState<Blog>({
    slug: "",
    title: "",
    description: "",
    tags: [""],
    date: new Date(Date.now()),
    image: "",
  });
  const [tagInputs, setTagInputs] = useState<Array<string>>([""]);
  console.log(tagInputs)

  const addTagInputs = () => {
    setTagInputs((prevTags) => [...prevTags, ""]);
  };

  const delTagInputs = (e, index) => {
    const tags = tagInputs.filter((tag, idx) => idx !== index);
    setTagInputs(tags);
  };

  const handleTagChange = (e, index) => {
    tagInputs[index] = e.target.value;

    setTagInputs([...tagInputs]);
  };

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e)=>{
    if(e.target.files){
      setBlog({ ...blog, image: e.target.files[0]})
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    
   const slug = slugify(blog.title.toLocaleLowerCase())
    const filteredTags = tagInputs.filter((tag:string)=>tag!=='')
    console.log(filteredTags)
    console.log(blog.tags)
    setBlog({...blog,slug: slug,tags: filteredTags})
    formData.append('title',blog.title)
    formData.append('slug',slug)
    formData.append('tags',JSON.stringify(filteredTags))

    formData.append('image',blog.image)
    formData.append('description',blog.description)
    console.log(formData)



    console.log(blog)

    fetch('/api/admin/',{method:'POST',body:formData}).then((res)=>{
      console.log(res)

    })


 

  





  };

  return (
    <div className="w-[100vw] h-[100vh] flex flex-nowrap flex-row p-10 items-center  gap-[200px] font-serif " id="main">
      <div className="flex flex-wrap p-4 flex-col gap-5 bg-incolor w-[500px] h-[500px] rounded-[4px] items-center overflow-y-scroll" id="formDiv">
        <form className="flex flex-wrap p-4 flex-col gap-5" id="form" onSubmit={handleSubmit}>
          <div className="flex flex-wrap p-4 flex-col gap-5">
            <input
              name="image"
              
              type="file"
              id="img"
              placeholder="upload an image"
              onChange={handleImageUpload}
             
            ></input>
            <input
              name="title"
               className='outline-none border-outcolor bg-outcolor border-[2px] rounded-md p-2 '
              value={blog.title}
              type="text"
              id="title"
              placeholder="Write a title"
              onChange={handleChange}
            ></input>
            <textarea
              name="description"
              value={blog.description}
              className='text-wrap break-words bg-outcolor overflow-x-hidden max-width:300px outline-none border-outcolor border-[2px] rounded-md p-2 '
              id="description"
              placeholder="Write description"
              onChange={handleChange}
            >
            </textarea>
            <div id="tags" className="flex flex-wrap flex-col gap-4 p-3 bg-outcolor rounded-md items-center">
              {tagInputs.map((tag, index) => {
                return (
                  <div key={index} id="inp" className="flex gap-4 justify-center">
                    <input
                      type="text"
                      value={tag}
                      onChange={(e) => handleTagChange(e, index)}
                      className=' outline-none p-2 rounded-md bg-incolor'
                      placeholder = {`Insert tag #${index+1} `}
                    ></input>
                    <button type='button'
                      onClick={(e) => delTagInputs(e, index)}
                      className=""
                    >
                      -
                    </button>
                  </div>
                );
              })}
              <button type='button' onClick={() => addTagInputs()} className="">
                +
              </button>
            </div>

            <button className="bg-outcolor w-[100px] h-[50px] text-center rounded-sm hover:scale-105 transition-all duration-200"  type="submit">Post</button>
          </div>
        </form>
      </div>
      <div className='p-4 flex bg-selectorbg w-[500px] h-[500px]' >
        <MarkdownRenderer >{blog.description}</MarkdownRenderer>
      </div>
    </div>
  );
}
