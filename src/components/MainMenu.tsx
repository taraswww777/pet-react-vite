import {Menu} from 'antd';
import {Link} from 'react-router-dom';
import {PAGE_UI_LINKS} from '../constants/pageUiLinks.ts';
import {PAGE_NAMES} from '../constants/pageNames.ts';
import {HomeOutlined} from '@ant-design/icons';

export const MainMenu = () => (
  <Menu
    mode={'horizontal'}
    items={[
      {
        key: 'PAGE_NAMES.Home',
        label: <Link to={PAGE_UI_LINKS[PAGE_NAMES.Home]}><HomeOutlined /></Link>,
      },
      {
        key: PAGE_NAMES.AntdForm,
        label: <Link to={PAGE_UI_LINKS[PAGE_NAMES.AntdForm]}>{PAGE_NAMES.AntdForm}</Link>,
      },
      {
        key: PAGE_NAMES.RtkQuery,
        label: <Link to={PAGE_UI_LINKS[PAGE_NAMES.RtkQuery]}>{PAGE_NAMES.RtkQuery}</Link>,
      }
    ]}
  />
)
