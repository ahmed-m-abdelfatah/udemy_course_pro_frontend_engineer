import { BellRing, X } from 'lucide-react';
import './index.scss';

interface AlertProps {}

const Alert = ({}: AlertProps) => {
  return (
    <div className='alert-wrapper danger'>
      <div className='alert-header'>
        <div className='title'>
          <BellRing className='icon' />
          <h4>Title</h4>
        </div>

        <X />
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, officia esse a recusandae quibusdam
        voluptates obcaecati qui exercitationem cum quo illum, laboriosam nobis doloremque, excepturi accusantium
        consequuntur inventore. Laudantium, at!
      </p>
    </div>
  );
};

export default Alert;
