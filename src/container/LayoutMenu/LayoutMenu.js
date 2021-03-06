import React from 'react';
import { Link } from 'react-router-dom';

const menu_data = [
  {
    id: 'ydkf',
    name: '移动客服',
    url: '/ydkf',
    defaultUrl: '/ydkf/singleScreen'
  },
  { id: 'ydzj', name: '移动质检', url: '/ydzj', defaultUrl: '/ydzj' },
  {
    id: 'ydyf',
    name: '移动验房',
    url: '/ydyf',
    defaultUrl: '/ydyf/singleScreen'
  }
];

class LayOutMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectIndex: 0
    };
  }

  selectHandle(index) {
    this.setState({ selectIndex: index });
  }

  render() {
    return (
      <div className="manage-menu">
        <dl>
          <dt>
            <span className="module-icon  align-m module-statistics" />
            <span className="align-m">数据服务</span>
          </dt>
          {menu_data.map((item, index) => {
            return (
              <dd
                className={
                  ('js-menu-item', index === this.state.selectIndex ? 'on' : '')
                }
                onClick={() => this.selectHandle(index)}
                key={item.id}
              >
                <Link to={item.defaultUrl}>{item.name}</Link>
              </dd>
            );
          })}
        </dl>
      </div>
    );
  }
}

export default LayOutMenu;
