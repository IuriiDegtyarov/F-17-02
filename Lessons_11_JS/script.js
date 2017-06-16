// interface Node {
//   // Всевозможные значения nodeType
//   const unsigned short ELEMENT_NODE = 1;
//   const unsigned short ATTRIBUTE_NODE = 2;
//   const unsigned short TEXT_NODE = 3;
//   const unsigned short CDATA_SECTION_NODE = 4;
//   const unsigned short ENTITY_REFERENCE_NODE = 5;
//   const unsigned short ENTITY_NODE = 6;
//   const unsigned short PROCESSING_INSTRUCTION_NODE = 7;
//   const unsigned short COMMENT_NODE = 8;
//   const unsigned short DOCUMENT_NODE = 9;
//   const unsigned short DOCUMENT_TYPE_NODE = 10;
//   const unsigned short DOCUMENT_FRAGMENT_NODE = 11;
//   const unsigned short NOTATION_NODE = 12;
// }

// var elem = document.querySelector('body');
// var elem = $('body')

// node.innerHtml = 'jhkj<div></div>'

// elem.getAttribute(name)
// elem.hasAttribute(name)
// elem.setAttribute(name, value)

// elem.parentElement, elem.nextElementSibling, elem.previousElementSibling
// elem.children, elem.firstElementChild, elem.lastElementChild


// table.rows[N]
// // строка TR номер N.
// tr.cells[N]
// // ячейка TH/TD номер N.
// tr.sectionRowIndex
// // номер строки в таблице в секции THEAD/TBODY.
// td.cellIndex
// // номер ячейки в строке.


// document.querySelector('body a');
// document.querySelectorAll('body a .target');

// document.getElementById('id');
// document.getElementsByClassName('class');
// document.getElementsById('id');
// document.getElementssByClassName('class');

// elem.closest('selector');
// elem.contains('selector');
// elem.matches('selector');

// var elem = document.createElement('div');

// parent.appendChild(newChild)
// parent.removeChild(child)
// parent.insertBefore(newChild, refNode)
// parent.insertAdjacentHTML("beforeBegin|afterBegin|beforeEnd|afterEnd", html)
// parent.insertAdjacentElement("beforeBegin|...|afterEnd", elem) (кроме FF)
// parent.insertAdjacentText("beforeBegin|...|afterEnd", text) (кроме FF)
// document.write(...)


// node.append(...nodes)
// node.prepend(...nodes)
// node.after(...nodes),
// node.before(...nodes)
// node.replaceWith(...nodes)

// elem.className += 'asd';
// elem.className = 'asd';

// elem.classList.add('class');
// elem.classList.remove('class');
// elem.classList.contains('class');
// elem.classList.toggle('class');

// elem.style="font-size: 14px;cursor: pointer;"


// const table = document.querySelector('.table');
// table.addEventListener('click', (event) => {
//   if (event.srcElement.tagName.toLowerCase() === 'td') {
//     event.srcElement.style = 'background: red;'
//   }
// })

// const table = document.querySelector('.table');
// let lastElement;
// table.addEventListener('click', (event) => {
//   if (event.srcElement.tagName.toLowerCase() === 'td') {
//     lastElement && (lastElement.style = 'background: none;');
//     event.srcElement.style = 'background: red;'
//     lastElement = event.srcElement;
//   }
// })

// const table = document.querySelector('.table');
// table.addEventListener('click', (event) => {
//   const tdArray = document.querySelectorAll('.table td');
//   [].forEach.call(tdArray, (elem) => {
//     elem.style = "background: none;"
//   });
//   if (event.srcElement.tagName.toLowerCase() === 'td') {
//     event.srcElement.style = 'background: red;'
//   }
// });


// const table = document.querySelector('.table');
// let startTime, endTime;
// table.addEventListener('click', (event) => {
//   if (event.srcElement.tagName.toLowerCase() === 'td') {
//     const tdArray = document.querySelectorAll('.table td');
//     let tdArrayColored = document.querySelectorAll('.table td[colored]');
//     if (tdArrayColored.length === 0) {
//       startTime = new Date().getTime();
//     }
//     event.srcElement.setAttribute('colored', '');
//     tdArrayColored = document.querySelectorAll('.table td[colored]');
//     event.srcElement.style = 'background: red;';
//     setTimeout(() => {
//       if (tdArray.length === tdArrayColored.length) {
//         endTime = new Date().getTime();
//         alert(Math.round((endTime - startTime)) + ' miliseconds');
//         [].forEach.call(tdArray, (elem) => {
//           elem.style = "background: none;"
//           elem.removeAttribute('colored');
//         });
//       }
//     })
//   }
// });


// const table = document.querySelector('.table');
// for (let i = 0; i < table.rows.length; i++) {
//   let tr = table.rows[i].cells[i].style = 'background: red;'
// }

// clientLeft/Top, clientWidth/Height,
// scrollWidth/Height, scrollLeft/Top, offsetWidth/Height


// const table = document.querySelector('.table');

// table.style = 'width:' + (document.documentElement.clientWidth / 2) + 'px;' +
//   'height:' + (document.documentElement.clientWidth / 2) + 'px;';

// window.addEventListener('resize', (event) => {
//   table.style = 'width:' + (document.documentElement.clientWidth / 2) + 'px;' +
//     'height:' + (document.documentElement.clientWidth / 2) + 'px;';
// })

const table = document.querySelector('.table');

window.addEventListener('resize', () => {
  let size = document.documentElement.clientWidth;
  table.style = `width: ${size/3}px; height: ${size/3}px;
  top: ${size * Math.random()}px; left: ${size * Math.random()}px;`
})























// table.style = 'width:' + (document.documentElement.clientWidth / 2) + 'px;' +
//   'height:' + (document.documentElement.clientWidth / 2) + 'px;';

// window.addEventListener('resize', (event) => {
//   table.style = 'width:' + (document.documentElement.clientWidth / 3) + 'px;' +
//     'height:' + (document.documentElement.clientWidth / 3) + 'px;' + 
//     'left:' + (document.documentElement.clientWidth * Math.random()) + 'px;' +
//     'top:' + (document.documentElement.clientWidth * Math.random()) + 'px;';


//     const coords = table.getBoundingClientRect();
//     console.log(coords)
// })