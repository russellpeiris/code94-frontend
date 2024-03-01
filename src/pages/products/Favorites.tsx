import { StarIcon } from '../../assets';
import { Flex, SearchBar, Text } from '../../components';
import { PrimaryButton, SecondaryButton } from '../../components/buttons/Buttons';
import { Screen } from '../../layout/Screen';
const Favorites = () => {
  return (
    <Screen flexDirection={'column'}>
      <Flex>
        <Text letterSpacing={'8px'} type="text-xl">
          FAVOURITE PRODUCTS
        </Text>
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
              console.log('object');
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
      <Flex></Flex>
    </Screen>
  );
};

export default Favorites;
