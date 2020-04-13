
// 懒加载方法
import React from 'react';
import Bundle from './bundle';
 
console.log(Bundle);
// 默认加载组件，可以直接返回 null
const Loading = () => <div>Loading...</div>;
 
/*
   包装方法，第一次调用后会返回一个组件（函数式组件）
   由于要将其作为路由下的组件，所以需要将 props 传入
*/
 
const lazyLoad = loadComponent => props => (
   <Bundle load={loadComponent}> 
      {Comp => (Comp ? <Comp {...props} /> : <Loading />)}
      jjjjjjjjjjjjjj 
   </Bundle>
);
 
console.log(lazyLoad);
export default lazyLoad;    //实际上lazyLoad就是一个函数,组件调用即可