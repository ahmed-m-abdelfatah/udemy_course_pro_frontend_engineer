import { ChangeEvent, FormEvent, useState } from 'react';
import ProductCard from './components/ProductCard';
import Modal from './components/ui/Modal';
import { formInputsList, productList } from './data';
import Button from './components/ui/Button';
import Input from './components/ui/Input';
import { IProduct, IErrorObj } from './interfaces';
import { productValidation } from './validation';
import ErrorMessage from './components/ErrorMessage';

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
  const defaultErrorObj: IErrorObj = {
    title: '',
    description: '',
    price: '',
    imageURL: '',
  };

  // ------------- States -------------
  const [product, setProduct] = useState(defaultProductObj);
  const [errors, setErrors] = useState(defaultErrorObj);
  const [isOpen, setIsOpen] = useState(false);

  // ------------- Handlers -------------
  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setProduct(defaultProductObj);
    setErrors(defaultErrorObj);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setProduct({
      ...product,
      [name]: value,
    });

    setErrors({ ...errors, [name]: '' });
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

    const hasErrors = Object.values(errors).some(value => value !== '');

    if (hasErrors) {
      setErrors(errors);
    } else {
      console.log('Send data to backend');
    }
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
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));

  return (
    <main className='container mx-auto my-3'>
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
              <Button
                type='submit'
                className='bg-indigo-700 hover:bg-indigo-800'>
                Submit
              </Button>
              <Button
                type='reset'
                className='bg-gray-400 hover:bg-gray-500'
                width='w-fit'
                onClick={closeModal}>
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
