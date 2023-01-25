import React from 'react'
import moment from 'moment/moment'


const PostDisplay = ({ post }) => {

  const getContent = (index, text, obj, type) => {
    let modifiedText = text;

    if(obj){
            if(obj.bold){
                modifiedText = (<b key={index}>{text}</b>)
            }
            if(obj.italic){
                modifiedText = (<em key={index}>{text}</em>)
            }
            if(obj.underline){
                modifiedText = (<u key={index}>{text}</u>)
            }
        }

    switch(type){
        case 'heading-three':
            return <h3 key={index} className='text-terciary text-[20px] ss:text-[25px] py-4 tracking-[1px] font-bold'>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>
        case 'paragraph':
            return <p key={index} className='text-gray-400 tracking-[1px] leading-[1.5rem] py-3 text-justify'>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
        case 'heading-four':
            return <h4 key={index} className='text-terciary py-4'>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
        case 'image':
            return (
                <img
                key={index}
                alt={obj.title}
                height={obj.height}
                width={obj.width}
                src={obj.src}
                  />
            );
            default:
                return modifiedText;   
        }
      }


    
  return (
    <article className='w-full'>
        <div>
            <h1 className='text-white text-center text-[28px] ss:text-[45px] capitalize'>{post.title}</h1>
            <img src={post.author.photo.url} alt="eclos" width={45} height={45} />
            <span className='text-gray-500 text-[16px] block ss:text-[18px] py-3'>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            <p className={`px-5 mb-3 font-bold tracking-[1px] inline-block`} style={{background: post.category.color.hex}}>#{post.category.name}</p>
        </div>
        <img src={post.coverImage.url} alt={post.title} />
        <div>
        {post?.content.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemIndex) => getContent(itemIndex, item.text, item))
              return getContent(index, children, typeObj, typeObj.type)
          })}
        </div>

    </article>
  )
}

export default PostDisplay