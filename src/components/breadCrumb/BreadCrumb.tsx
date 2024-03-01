import { Breadcrumb } from 'antd';
import { FC } from 'react';
import { Link, Location, useLocation } from 'react-router-dom';
import { Text } from '..';
import { ArrowIcon } from '../../assets';

export const BreadCrumb: FC = () => {
  const getBreadcrumbItems = (location: Location<any>) => {
    const paths = location.pathname.split('/').filter(Boolean); // Filter out empty strings
    const items = paths.map((path, index) => {
      const label = decodeURIComponent(path);

      if (path === 'products') {
        return {
          key: index,
          label: (
            <Text type="text-xl">
              <Link to={`/products`}>PRODUCTS</Link>
            </Text>
          ),
        };
      } else if (index === paths.length - 1) {
        return { key: index, label: <Text type="text-large">{label}</Text> };
      } else {
        return {
          key: index,
          label: (
            <Text type="text-large">
              <Link to={`/${paths.slice(0, index + 1).join('/')}`}>{label}</Link>
            </Text>
          ),
        };
      }
    });

    return items;
  };
  const location = useLocation();
  const items = getBreadcrumbItems(location);
  return (
    <Breadcrumb separator={<ArrowIcon />}>
      {items.map((item) => (
        <Breadcrumb.Item key={item.key}>{item.label}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};
