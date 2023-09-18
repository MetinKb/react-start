// import { createElement } from 'react';

function App() {
  const todos = ['todo1', 'todo2', 'todo3']

  // JSX Olmasaydı elementleri bu şekillerde oluşturacaktık.
  // 1. Yol
  // return createElement('main', {
  //   id: 'id',
  //   className: 'main'
  // }, createElement('h1',
  //   {
  //     id: 'title',
  //     className: 'title'
  //   }, 'JSX Olmasaydı'), createElement('ul', null, todos.map(
  //     todo => createElement('li', null, todo))))
  // 2. Yol
  // const h1 = createElement('h1', {
  //   id: 'title',
  //   className: 'title'
  // }, 'JSX Olmasaydı')

  // const ul = createElement('ul', null, todos.map(todo => createElement('li', null, todo)))

  // return createElement('main', {
  //   id: 'main',
  //   className: 'main'
  // }, h1, ul)

  // JSX ile bu şekilde kolaylıkla oluşturabiliyoruz
  return (
    <main id='main' className='main'>
      <h1 tabIndex='3' style={{ color: 'red', backgroundColor: '#eee', fontSize: '3rem', padding: '2rem' }}>JSX İle</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
        )
        )}
      </ul>
      <label onClick={() => { alert('Hello!') }} htmlFor="search" style={{ marginRight: '1rem' }} tabIndex='2'>Search</label>
      <input type="text" id='search' tabIndex='1' />
    </main>

  );

  /*
  JSX'te elementler camelCase formatında yazılır ve JavaScript ifadeleri de {} içerisinde yazılır
  class = className
  for = htmlFor
  key(unique value)
  style = style{{style values}}
  tabIndex =  tab'a basıldığında gidilecek element sırası
  */
}


export default App;