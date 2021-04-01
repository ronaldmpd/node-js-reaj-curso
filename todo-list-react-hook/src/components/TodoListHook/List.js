import { array, func } from 'prop-types';

const List = (props) => (
  <ul>
    {props.items.map((item) => (
      <li key={item.id} className={`${item.completed ? 'completed' : 'pending'}`}>
        {item.task}
        <div className="actions">
          <span className={item.completed ? 'hide' : 'done'}>
            <button type="button" onClick={() => props.markAsCompleted(item.id)}>
              <i className="fa fa-check" />
            </button>
          </span>
          <span className="trash">
            <button type="button" onClick={() => props.removeTask(item.id)}>
              <i className="fa fa-trash" />
            </button>
          </span>
        </div>
      </li>
    ))}
  </ul>
);

List.propTypes = {
  items: array,
  markAsCompleted: func,
  removeTask: func,
};

export default List;
