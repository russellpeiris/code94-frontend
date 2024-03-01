import { Table } from 'antd';
import { ColumnProps } from 'antd/es/table';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DeleteIcon, EditIcon, StarIcon } from '../../assets';
import { BreadCrumb, Flex, PrimaryButton, SearchBar, SecondaryButton } from '../../components';
import { Screen } from '../../layout/Screen';
import { deleteProduct, getProducts } from '../../store/reducer';
const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state: any) => {
    return state.product.products.products;
  });
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {}, [products]);
  const columns: ColumnProps<any>[] = [
    {
      title: 'SKU',
      dataIndex: 'sku',
      key: 'sku',
    },
    {
      title: 'IMAGE',
      dataIndex: 'productImages',
      key: 'productImages',
      render: (productImages: string[]) => (
        <>
          {productImages.map((imageUrl, index) => (
            <img key={index} src={imageUrl} style={{ width: '50px', height: '50px', marginRight: '5px' }} />
          ))}
        </>
      ),
    },
    {
      title: 'PRODUCT NAME',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: 'QUANTITY',
      dataIndex: 'productQuantity',
      key: 'productQuantity',
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      render: (_, record: any) => (
        <>
          <Flex style={{ gap: '12px' }}>
            <EditIcon onClick={() => navigate(`/products/edit-product/${record.sku}`)} />

            <DeleteIcon onClick={() => dispatch(deleteProduct(record.sku))} />

            <StarIcon />
          </Flex>
        </>
      ),
    },
  ];

  const data = products?.map((product: any) => {
    return {
      key: product._id,
      sku: product.sku,
      productName: product.productName,
      productQuantity: product.productQuantity,
      productImages: product.productImages,
    };
  });
  return (
    <Screen flexDirection={'column'}>
      <Flex>
        <BreadCrumb />
      </Flex>
      <Flex mt={'32px'} justifyContent={'space-between'} alignItems={'center'}>
        <SearchBar
          placeholder="Search for products"
          triggerClick={() => {
            console.log('object');
          }}
        />
        <Flex style={{ gap: '12px' }}>
          <PrimaryButton
            buttontext="New Product"
            onClick={() => {
              navigate('/products/add-products');
            }}
          />
          <SecondaryButton
            style={{ width: '72px' }}
            icon={<StarIcon />}
            onClick={() => {
              console.log('object');
            }}
          />
        </Flex>
      </Flex>
      <Table columns={columns} dataSource={data}></Table>
    </Screen>
  );
};

export default Products;
