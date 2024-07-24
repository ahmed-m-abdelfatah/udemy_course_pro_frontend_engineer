import { ChangeEvent, FormEvent, useState } from 'react';
import ProductCard from './components/ProductCard';
import Modal from './components/ui/Modal';
import { formInputsList, productList } from './data';
import Button from './components/ui/Button';
import Input from './components/ui/Input';
import { IProduct } from './interfaces';
import { productValidation } from './validation';

const App = () => {
  const defaultProductObj: IProduct = {
    title: '',
    description: '',
    price: '',
    imageURL: '',
    colors: [],
    category: {
      name: '',
      imageURL: '',
    },
  };

  // ------------- Renders -------------
  const [product, setProduct] = useState(defaultProductObj);
  const [isOpen, setIsOpen] = useState(false);

  // ------------- Handlers -------------
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };
  const onCancel = (): void => {
    setProduct(defaultProductObj);
    closeModal();
  };
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, price, imageURL } = product;

    const errors = productValidation({
      title,
      description,
      price,
      imageURL,
    });

    const canSubmit =
      Object.values(errors).some(value => value === '') &&
      Object.values(errors).every(value => value === '');

    if (!canSubmit) {
      return;
    }

    console.log('errors:', errors);
    console.log('canSubmit:', canSubmit);
  };

  // ------------- Renders -------------
  const renderProductList = productList.map(product => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFormInputList = formInputsList.map(input => (
    <div className='flex flex-col' key={input.id}>
      <label
        className='mb-[2px] text-sm font-medium text-gray-700'
        htmlFor={input.id}>
        {input.label}
      </label>
      <Input
        id={input.id}
        type={input.type}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
    </div>
  ));

  return (
    <main className='container mx-auto'>
      <Button className='bg-indigo-700 hover:bg-indigo-800' onClick={openModal}>
        Add Product
      </Button>

      <div className='m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md'>
        {renderProductList}

        {/* Modal */}
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          title='ADD A NEW PRODUCT'>
          <form className='space-y-3' onSubmit={submitHandler}>
            {renderFormInputList}

            <div className='flex items-center space-x-3'>
              <Button className='bg-indigo-700 hover:bg-indigo-800'>
                Submit
              </Button>
              <Button
                className='bg-gray-400 hover:bg-gray-500'
                width='w-fit'
                onClick={onCancel}>
                Cancel
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    </main>
  );
};

export default App;
