interface IResolveVal {
  type: string;
  e: MouseEvent;
}
type TModal = (
  title: string,
  content: string,
  css: any,
  flag?: Boolean | undefined,
  comfrim_cb?: () => void,
  concel_cb?: () => void
) => void | Promise<IResolveVal>;
export { IResolveVal, TModal };
