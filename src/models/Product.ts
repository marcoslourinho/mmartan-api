import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate';

const Schema = mongoose.Schema;

export const productSchema = new Schema({
    title: {
        type: String,
        required: 'Insira um titulo para o produto'
    },
    category: {
        type: String,
        required: 'Insira a categoria do produto'
    },
    type: {
        type: String,
        required: 'Insira o tipo do produto'            
    },
    price: {
        type: Number,
        required: 'Insira o preço do produto'            
    },
    discount_price: {
        type: Number,
        required: 'Insira o desconto do produto'            
    },
    pictures: {
        type: Schema.Types.Mixed,
        default: ""
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

productSchema.plugin(mongoosePaginate);
