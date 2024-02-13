import { AlertTriangle, Ban, BellRing, Info, X } from 'lucide-react';
import './index.scss';

interface AlertProps {
  type: 'danger' | 'success' | 'warning' | 'info';
  title: string;
  description: string;
}

const Alert = ({ type, title, description }: AlertProps) => {
  // Define icons based on the type
  const getIcon = (type: string) => {
    switch (type) {
      case 'danger':
        return <Ban className='icon' />;
      case 'success':
        return <BellRing className='icon' />;
      case 'warning':
        return <AlertTriangle className='icon' />;
      case 'info':
        return <Info className='icon' />;
      default:
        return null;
    }
  };

  return (
    <div className={'alert-wrapper ' + type}>
      <div className='alert-header'>
        <div className='title'>
          {getIcon(type)}
          <h4>{title}</h4>
        </div>

        <X className='close' />
      </div>

      <p>{description}</p>
    </div>
  );
};

export default Alert;
