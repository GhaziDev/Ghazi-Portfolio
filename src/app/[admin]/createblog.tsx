"use client";
import { useState ,useEffect} from "react";

import { Blog } from "../interfaces/interfaces";
import { BlogModel } from "../models/Blog";

import slugify from "slugify";




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
    
   const slug = slugify(blog.title)
    const filteredTags = tagInputs.filter((tag:string)=>tag!=='')
    console.log(filteredTags)
    console.log(blog.tags)
    setBlog({...blog,slug: slug,tags: filteredTags})
    formData.append('title',blog.title)
    formData.append('slug',blog.slug)
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
    <div className="" id="main">
      <div className="" id="formDiv">
        <form className="" id="form" onSubmit={handleSubmit}>
          <div className="inputsDiv">
            <input
              name="image"
              
              type="file"
              id="img"
              placeholder="upload an image"
              onChange={handleImageUpload}
            ></input>
            <input
              name="title"
              value={blog.title}
              type="text"
              id="title"
              placeholder="Write a title"
              onChange={handleChange}
            ></input>
            <input
              name="description"
              value={blog.description}
              type="text"
              id="description"
              placeholder="Write description"
              onChange={handleChange}
            >
            </input>
            <div id="tags" className="">
              {tagInputs.map((tag, index) => {
                return (
                  <div key={index} id="inp" className="">
                    <input
                      type="text"
                      value={tag}
                      onChange={(e) => handleTagChange(e, index)}
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

            <button type="submit">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
}
