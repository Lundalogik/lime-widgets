import { Component, h, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'todo-widget',
  styleUrl: 'todo-widget.scss'
})
export class TodoWidget {
  @Prop()
  todoListData;

  render() {
    return (
      <div class="todo-widget">
        <div class="todo-widget__header">
          <div class="todo-widget__header__widget-name">Todos</div>
          <div class="todo-widget__header__widget-filter">
          </div>
          <div class="todo-widget__header__widget-table-view">
          </div>
        </div>
        <div class="todo-widget__sorting">
          <div class="todo-widget__sorting__cell">&#8285;</div>
          <div class="todo-widget__sorting__cell">&#8285;</div>
          <div class="todo-widget__sorting__cell">&#8285;</div>
        </div>
        <div class="todo-widget__list">
          <div class="todo-widget__list__row">
            <div class="todo-widget__list__row__cell todo__time-info is-overdue">
              <div class="todo__time-info__due-date__day">
                27
              </div>
              <div class="todo__time-info__due-date__month">
                Dec
              </div>
              <div class="todo__time-info__due-date__time">
                10:00
              </div>
            </div>
            <div class="todo-widget__list__row__cell todo__prio">
              <div class="todo__prio__badge">5</div>
            </div>
            <div class="todo-widget__list__row__cell">
            <div class="todo__subject">This subject is a very very very long looooong looooong long</div>
            <div class="todo__description">This is an example of an overdue task. Overdue tasks will by default be placed on top of the "Today's" tasks.</div>
            </div>
          </div>
          {this.todoListData.map(todo => [
            <div class="todo-widget__list__row">
              <div class="todo-widget__list__row__cell todo__time-info">
                <div class="todo__time-info__due-date__day">
                  {todo.dueDate_day}
                </div>
                <div class="todo__time-info__due-date__month">
                  {todo.dueDate_month}
                </div>
                <div class="todo__time-info__due-date__time">
                  {todo.dueDate_time}
                </div>
                <div class="todo__time-info__due-date__time">
                  {todo.dueDate_time_end}
                </div>
              </div>
              <div class="todo-widget__list__row__cell todo__prio">
                <div class="todo__prio__badge">{todo.priority}</div>
              </div>
              <div class="todo-widget__list__row__cell">
                <div class="todo__subject">{todo.todo_subject}</div>
                <div class="todo__description">{todo.todo_description}</div>
              </div>
            </div>
            ])
          }
          <div class="todo-widget__list__day-divider">
            Tomorrow
          </div>
          <div class="todo-widget__list__day-divider">
            2020 Jan 01
          </div>
        </div>
      </div>
    );
  }
}
