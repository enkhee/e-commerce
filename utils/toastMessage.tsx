import type { TypeOptions } from 'react-toastify';
import { toast } from 'react-toastify';

interface ToastMessageProps {
  type: TypeOptions;
  message: any;
}

const ToastMessage: React.FC<ToastMessageProps> = ({ type, message }) => {
  (toast as any)[type](
    <>
      <div
        style={{
          fontSize: 16,
          flexShrink: 0,
          textAlign: 'left',
          width: '0px',
          color: 'white',
          display: 'flex',
        }}
      />
      <div
        style={{
          flexGrow: 1,
          fontSize: 16,
          padding: '8px 12px',
          fontFamily: 'inherit',
        }}
      >
        {message}
      </div>
    </>
  );
  return null;
};

export default ToastMessage;
