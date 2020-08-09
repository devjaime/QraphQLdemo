import React, {useState} from 'react'
import {gql} from 'apollo-boost'
import {useMutation} from '@apollo/react-hooks'
const CREATE_MESSAGE= gql`
    mutation CreateMessage($title:String!, $content:String!, $author:String!){
        createMessage(title:$title, content:$content, author:$author){
            author
        }
    }
`

const MessageList = () => {
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [createMessage] = useMutation(CREATE_MESSAGE)
    return(
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card-body">
                    <form onSubmit ={async e => {
                        e.preventDefault()
                        // console.log(title,author,content);
                        await createMessage({variables:{title, author, content}})
                        window.location.href="/"
                    }}>
                        <div className="form-group">
                            <input type="text" placeholder= "Autor" className="form-control"  onChange={e => setAuthor(e.target.value)} value={author} />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder= "Escribe un titulo" className="form-control" onChange={e => setTitle(e.target.value)}value={title} />
                        </div>
                        <div className="form-group">
                        <textarea rows="2" placeholder= "Contenido" className="form-control" onChange={e => setContent(e.target.value)} value={content} />
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