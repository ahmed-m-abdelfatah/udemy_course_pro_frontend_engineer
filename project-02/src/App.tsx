import { useState } from 'react';
import ProductCard from './components/ProductCard';
import Modal from './components/ui/Modal';
import { productList } from './data';
import Button from './components/ui/Button';

const App = () => {
  // ------------- Renders -------------
  const [isOpen, setIsOpen] = useState(false);

  // ------------- Handlers -------------
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // ------------- Renders -------------
  const renderProductList = productList.map(product => <ProductCard key={product.id} product={product} />);
  // Renders other syntax
  // const renderProductList = () => {
  //   // ** If there any Logic you can write here
  //   return productList.map(product => <ProductCard key={product.id} />);
  // };

  return (
    <main className='container mx-auto'>
      <Button className='bg-indigo-700 hover:bg-indigo-800' onClick={openModal}>
        Add Product
      </Button>

      <div className='m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md'>
        {renderProductList}
        <Modal isOpen={isOpen} closeModal={closeModal} title='ADD A NEW PRODUCT'>
          <div className='flex items-center space-x-3'>
            <Button className='bg-indigo-700 hover:bg-indigo-800'>Submit</Button>
            <Button className='bg-gray-400 hover:bg-gray-500' width='w-fit'>
              Cancel
            </Button>
          </div>
        </Modal>
      </div>
    </main>
  );
};

export default App;
