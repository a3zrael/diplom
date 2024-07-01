import {
  Description,
  DialogPanel,
  Dialog,
  DialogTitle,
} from "@headlessui/react";
import "./index.scss";

export const Modal = ({ isOpen, setIsOpen, item }) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="bg">
        <DialogPanel className="popup">
          <DialogTitle className="text-lg font-bold mobile__fix">
            {item.theme}
          </DialogTitle>
          <Description className="mobile__fix">
            <p>{item.firstText}</p>
            <br />
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {item.link}
            </a>
            <br />
            <p>{item.lastText}</p>
          </Description>
          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Закрыть
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
