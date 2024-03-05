import Image from './Image';
import Button from './ui/Button';

interface ProductCardProps {}

const ProductCard = ({}: ProductCardProps) => {
  return (
    <div className='border rounded-md p-2 flex flex-col'>
      <Image className='rounded-md' imgURL='http://unsplash.it/500?random&gravity=center' alt='img' />
      <h3>Lorem ipsum dolor sit amet.</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tempore facere ipsa dolore molestiae quidem animi
        velit alias reprehenderit fuga similique, at porro earum in distinctio ad quod soluta consectetur rerum
        inventore id. Iusto repellat, ex cupiditate earum quae corrupti accusamus mollitia fuga aliquid, suscipit soluta
        magnam debitis ratione aperiam ducimus tempore atque voluptates. Excepturi molestiae, quibusdam aliquam
      </p>

      <div className='flex items-center my-3 space-x-2'>
        <span className='w-5 h-5 bg-indigo-600 rounded-full cursor-pointer' />
        <span className='w-5 h-5 bg-yellow-600 rounded-full cursor-pointer' />
        <span className='w-5 h-5 bg-red-600 rounded-full cursor-pointer' />
      </div>

      <div className='flex items-center justify-between'>
        <span>$500,000</span>
        <Image
          className='w-10 h-10 rounded-full object-center'
          imgURL='http://unsplash.it/500?random&gravity=center'
          alt='img'
        />
      </div>

      <div className='flex items-center justify-between space-x-2 rounded-md mt-5'>
        <Button className='bg-indigo-700' onClick={() => console.log('first')}>
          EDIT
        </Button>
        <Button className='bg-red-700' width='w-fit'>
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
