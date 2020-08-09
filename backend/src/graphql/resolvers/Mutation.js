import Message from '../../models/Message'
const Mutation = {
    createMessage: async(_, { title, content, author, price, image }) => {
        const newMessage = new Message({ title, content, author, price, image });
        return await newMessage.save();
    }
};

export default Mutation;