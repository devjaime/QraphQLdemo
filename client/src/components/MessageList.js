import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'

import 'animate.css'
const GET_MESSAGES = gql`
  {
    messages{
        _id
        title
        content
        author
        price
        image
    }
  }
`;
const MessageList = () => {
    const {loading, error, data} = useQuery(GET_MESSAGES)
    if (loading) return <p>Cargando Mensajes...</p>
    if(error){
        return <p>Error</p>
    }
    console.log(data)
    return(
                   

        <div className="row animate__animated animate__fadeIn">
           <div className="col-mod-6 offset-md-3 ">
            {
                data.messages.map(({_id,title,content,author, image,price}) => (
                    
                    <div key={_id} className="card m-2 ">
                       
                        <div className="card-body">
                             <h4>{title}</h4>
                             <p>Vendedor: {author}</p>
                             <p>Precio: {price}</p>
                             <a className="btn btn-primary stretched-link" href={content}>Ir al detalle</a>
                             <img src={image} alt="" className="animate__animated animate__fadeInRight"/>
                       
                        </div>
                        
                    </div>
                    
                    ))
                }
          </div> 
        </div>

        
    )
}
 


export default MessageList;