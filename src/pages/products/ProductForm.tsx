import { Col, Form, Row } from 'antd';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BreadCrumb, FileUpload, Flex, InputBox, PrimaryButton } from '../../components';
import { Screen } from '../../layout/Screen';
import { getProduct, postProduct, updateProduct, uploadImage } from '../../store/reducer';

interface Props {
  isEditing?: boolean;
}

const ProductForm: FC<Props> = ({ isEditing }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const imageURLs = useSelector((state: any) => state.product.productImages.productImages);
  const initialValues = useSelector((state: any) => state.product.singleProduct.product);
  const { sku } = useParams();

  const images: { file: File }[] = [];

  const handleSubmit =async (values: any) => {
    values.productImages = imageURLs;
      if (isEditing) {
        dispatch(updateProduct({ ...values, sku }));
      } else {
        dispatch(postProduct(values));
      }

  };
  useEffect(() => {
    if (isEditing && sku) {
      dispatch(getProduct(sku));
    }
  }, [isEditing]);

  useEffect(() => {
    if (isEditing && initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues]);


  

  const handleImageUpload = async (files: FileList | null): Promise<void> => {
    if (files?.length) {
      for (let i = 0; i < files.length; i++) {
        images.push({ file: files[i] });
      }
    }
     await dispatch(uploadImage(images))
  };

  return (
    <Screen flexDirection={'column'}>
      <Flex>
        <BreadCrumb />
      </Flex>
      <Form form={form} onFinish={handleSubmit}>
        <Row gutter={[32, 32]}>
          <Col span={12}>
            <Form.Item name="sku" rules={[{ required: true, message: 'Please input SKUI!' }]}>
              <InputBox label="SKU" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[32, 32]} style={{ marginTop: '32px' }}>
          <Col span={12}>
            <Form.Item name="productName" rules={[{ required: true, message: 'Please input Product Name!' }]}>
              <InputBox label="Name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="productQuantity" rules={[{ required: true, message: 'Please input Quantity!' }]}>
              <InputBox label="QTY" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[32, 32]} style={{ marginTop: '32px' }}>
          <Col span={24}>
            <Form.Item name="productDescription" rules={[{ required: true, message: 'Please input Description!' }]}>
              <InputBox height="105px" labelPosition="top" label="Description" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[32, 32]} style={{ marginTop: '32px' }}>
          <Col span={8}>
            <Form.Item name="productImages" rules={[{ required: false, message: 'Please input Images!' }]}>
              <FileUpload onFileChanged={(e) => handleImageUpload(e)} label="Product Images" />
              { form.getFieldValue('productImages')?.length > 0 && (
                <Flex style={{ gap: '12px' }}>
                  {form.getFieldValue('productImages').map((imageUrl: string, index: number) => (
                    <img
                      key={index}
                      src={imageUrl}
                      style={{ width: '50px', height: '50px', marginRight: '5px' }}
                    />
                  ))}
                </Flex>
              )
              }
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[32, 32]} style={{ marginTop: '32px' }}>
          <Col span={12}>
            <PrimaryButton buttontext="Save" htmlType="submit" />
          </Col>
        </Row>
      </Form>
    </Screen>
  );
};

export default ProductForm;
