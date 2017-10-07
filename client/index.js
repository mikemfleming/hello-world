'use strict';

const html = require('choo/html');
const choo = require('choo');

const app = choo();

app.use(titleStore);
app.route('/', mainView);
app.mount('body');

function mainView (state, emit) {
  return html`
            <body>
                <h1>${state.title}</h1>
                <input type="text" value="${state.title}" oninput=${update} />
            </body>
        `;

  function update (e) {
    emit('update', e.target.value);
  }
}

function titleStore(state, emitter) {
  state.title = 'Hello new favorite frameworks! o.O';
  emitter.on('DOMContentLoaded', function () {
    emitter.on('update', function (newTitle) {
      state.title = newTitle;
      emitter.emit('render');
    });
  });
}

