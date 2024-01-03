
export type onChangeEventType = {
    target: { value: string, name:string } 
}
export type onChangeEventImgType = {
    target: { file:  File } 
}
export type propsType={
   title:string,
   detail:string,
   image: File 
}
// export type PostProviderType={
//     id:number
//     title: string,
//     detail: string,
//     category: string,
//     image:File | null
// }