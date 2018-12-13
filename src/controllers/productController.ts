import * as mongoose from 'mongoose';
import { productSchema } from '../models/Product';
import { Request, Response } from 'express';

const Product = mongoose.model('Product', productSchema);

export class productController {

    index = async (req: Request, res: Response) => {    
        try {
            const {page, limit} = req.query;
            const products = await Product.paginate({}, {page:parseInt(page), limit:parseInt(limit)});
            res.json(products);
        } catch (error) {
            res.json({ success: false, error: error })
        }
    }

    store = async (req: Request, res: Response) => { 
        try {
            const product = await Product.create(req.body);
            res.json(product);
        } catch (error) {
            res.json({ success: false, error: error })
        }
    }

    view = async (req: Request, res: Response) => {
        try {
            const product = await Product.findById(req.params.id);
            res.json(product);
        } catch (error) {
            res.json({ success: false, error: error });
        }
    }

    update = async (req: Request, res: Response) => {
        try {
            await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
            res.json({ success: true });
        } catch (error) {
            res.json({ success: false, error: error });
        }
    }

    destroy = async (req: Request, res: Response) => {
        try {
            await Product.deleteOne({ _id: req.params.id});
            res.json({ success: true });
        } catch (error) {
            res.json({ success: false, error: error });
        }
    }

    search = async (req: Request, res: Response) => {
        try {
            const {query, page, limit} = req.query;
            const products = await Product.paginate({title:{$regex:`.*${query}.*`}}, {page:parseInt(page), limit:parseInt(limit)});
            res.json(products);
        } catch (error) {
            res.json({ success: false, error: error });
        }
    }
}