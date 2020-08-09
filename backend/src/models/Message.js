import { Schema, model } from 'mongoose'

new Schema({
    title: {
        type: String,
        required: true
    }
})