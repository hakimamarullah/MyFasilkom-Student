type ToastProps = {
  title?: string;
  duration?: number;
  animationType?: string;
  placement?: string;
};
export const DangerToastConfig = (props: ToastProps) => ({
  type: 'custom_danger',
  data: {title: props.title || 'Error Info'},
  placement: props.placement || 'top',
  duration: props.duration || 2000,
  animationType: props.animationType || 'slide-in',
});

export const SuccessToastConfig = (props: ToastProps) => ({
  type: 'custom_success',
  data: {title: props.title || 'Info'},
  placement: props.placement || 'top',
  duration: props.duration || 2000,
  animationType: props.animationType || 'slide-in',
});
