import React, {useState} from 'react'
import {gql} from 'apollo-boost'
import {useMutation} from '@apollo/react-hooks'
const CREATE_MESSAGE= gql`
    mutation CreateMessage($title:String!, $content:String!, $author:String!,$price:String!, $image:String!){
        createMessage(title:$title, content:$content, author:$author, price:$price, image:$image){
            _id
            title
            content
            author
            price
            image
        }
    }
`

const MessageList = () => {
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [createMessage] = useMutation(CREATE_MESSAGE)

    return(
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card-body">
                    <form onSubmit ={async e => {
                        e.preventDefault()
                        console.log(title, content,author, price, image);
                        await createMessage({variables:{title, content,author, price, image}})
                        window.location.href="/"
                    }}>
                        <div className="form-group">
                            <input type="text" placeholder= "Vendedor" className="form-control"  onChange={e => setAuthor(e.target.value)} value={author} />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder= "Descripción producto" className="form-control" onChange={e => setTitle(e.target.value)}value={title} />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder= "Contenido" className="form-control" onChange={e => setContent(e.target.value)} value={content} />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder= "Precio" className="form-control" onChange={e => setPrice(e.target.value)} value={price} />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder= "Imagen" className="form-control" onChange={e => setImage(e.target.value)}value={image} />
                        </div>
                        <button className="btn btn-block btn-success">
                            Guardar
                        </button>
                    </form>
                   
                </div>
            </div>
        </div>
    )
}

export default MessageList;