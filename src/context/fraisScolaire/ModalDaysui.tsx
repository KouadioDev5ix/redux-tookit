type ModalProps = {
  content: string;
  cancelButton: string;
  actionButton: string;
  title: string;
  bothBtnClassName: string;
  titleClassName: string;
  saveBtnClassName: string;
  cancelBtnClassName: string;
  descriptionClassName: string;
  isModalOpen?: boolean;
  closeModal?: boolean;
  handleOpenModal?: () => void;
};

export const ModalDaysui = ({
  content,
  cancelButton,
  actionButton,
  title,
  bothBtnClassName,
  saveBtnClassName,
  cancelBtnClassName,
  descriptionClassName,
  titleClassName,
  handleOpenModal,
}: ModalProps) => {


  return (
    <div>
      <dialog
        id="my_modal_3"
        className="modal flex justify-center items-start pt-5 mx-auto"
      >
        <div className="modal-box ">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="h-72 ">
            <h1 className={titleClassName}>{title}</h1>

            <div>
              <p className={descriptionClassName}>{content}</p>
            </div>
          </div>
        </div>

        <div className={bothBtnClassName}>
          <button className={saveBtnClassName}>{cancelButton}</button>
          <button className={cancelBtnClassName}>{actionButton}</button>
        </div>
      </dialog>
    </div>
  );
};
