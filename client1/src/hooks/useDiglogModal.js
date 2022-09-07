import React from "react";

export const useDiglogModal = (Component) => {
  const [open, setOpen] = React.useState(false);
  const openDialog = () => {
    setOpen(true);
  };
  //   const openDialog = React.useCallback(() => {
  //     setOpen(true);
  //   }, []);
  const DialogComponent = ({ element }) => {
    return open ? (
      <Component open={open} onClose={() => setOpen(false)} element={element} />
    ) : null;
  };
  //   const DialogComponent = React.useCallback(
  //     ({ element }) => {
  //       console.log(Component);
  //       if (!open) return null;
  //       if (Component) {
  //         console.log("kkk");
  //         return (
  //           <Component
  //             open={open}
  //             onClose={() => setOpen(false)}
  //             element={element}
  //           />
  //         );
  //       }
  //     },
  //     [open, Component]
  //   );
  return [openDialog, DialogComponent];
};
