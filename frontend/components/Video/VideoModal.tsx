import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { CgCloseR } from 'react-icons/cg';

interface Props {
  setOpen: (b: boolean) => void;
  open: boolean;
  src: string;
}

export const VideoModal: React.FC<Props> = ({ open, src, setOpen }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto outline-none">
          <div className="flex min-h-full items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="container h-full w-full max-w-5xl outline-none">
                <div className="absolute -top-11 right-4">
                  <button
                    type="button"
                    className="text-white outline-none"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <CgCloseR className="h-10 w-10" aria-hidden="true" />
                  </button>
                </div>

                <div className="aspect-w-16 aspect-h-8">
                  <iframe
                    src={src}
                    title="YouTube video player"
                    allow="encrypted-media; picture-in-picture"
                  ></iframe>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
