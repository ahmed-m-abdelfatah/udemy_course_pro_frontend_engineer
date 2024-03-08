import { IProduct } from '../interfaces';
import { txtSlicer } from '../utils/functions';
import Image from './Image';
import Button from './ui/Button';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { title, description, category, imageURL, price } = product;

  return (
    <div className='max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col'>
      <Image className='rounded-md' imgURL={imageURL} alt='img' />
      <h3 className='text-lg font-semibold'>{title}</h3>
      <p className='text-sm text-gray-500 break-words'>{txtSlicer(description)}</p>

      <div className='flex items-center my-3 space-x-2'>
        <span className='w-5 h-5 bg-indigo-600 rounded-full cursor-pointer' />
        <span className='w-5 h-5 bg-yellow-600 rounded-full cursor-pointer' />
        <span className='w-5 h-5 bg-red-600 rounded-full cursor-pointer' />
      </div>

      <div className='flex items-center justify-between'>
        <span className='text-lg text-indigo-600 font-semibold'>${price}</span>
        <Image className='w-10 h-10 rounded-full object-center' imgURL={category.imageURL} alt={category.name} />
      </div>

      <div className='flex items-center justify-between space-x-2 rounded-md mt-5'>
        <Button className='bg-indigo-700 hover:bg-indigo-800' onClick={() => console.log('EDIT')}>
          EDIT
        </Button>
        <Button className='bg-red-700 hover:bg-red-800' width='w-fit'>
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
