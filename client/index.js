'use strict';

const html = require('choo/html');
const choo = require('choo');

const app = choo();

app.use(titleStore);
app.use(countStore);
app.route('/', mainView);
app.mount('body');

function mainView (state, emit) {
  return html`
            <body>
                <h1>${state.title}</h1>
                <input type="text" value="${state.title}" oninput=${update} />
                <h1>count is ${state.count}</h1>
                <button onclick=${increment}>Increment</button>
            </body>
        `;

  function update (e) {
    emit('update', e.target.value);
  }

  function increment (e) {
    emit('increment', e.target.value);
  }
}

function countStore (state, emitter) {
  state.count = 0;
  emitter.on('DOMContentLoaded', function () {
    emitter.on('increment', function () {
      state.count = ++state.count;
      emitter.emit('render');
    });
  });
}

function titleStore (state, emitter) {
  state.title = 'Hello new favorite frameworks! o.O';
  emitter.on('DOMContentLoaded', function () {
    emitter.on('update', function (newTitle) {
      state.title = newTitle;
      emitter.emit('render');
    });
  });
}

