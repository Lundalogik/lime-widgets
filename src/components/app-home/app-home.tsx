import { Component, h } from '@stencil/core';
import { todoListData } from '../../fixtures/todo-list-data.fixture';

@Component({
  tag: 'app-home',
  styles: `
      .app-home {
        margin: 10px;
      }
    `,
  shadow: true
})
export class AppHome {
  private todoButtonClicked(e) {
    console.log(e);
  }

  render() {
    return (
      <div class="app-home">
        <todo-widget
          todoListData={todoListData}
        ></todo-widget>
      </div>
    );
  }
}
