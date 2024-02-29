import { StarIcon } from "../../assets"
import { Flex, SearchBar, Text } from "../../components"
import { PrimaryButton } from "../../components/buttons/PrimaryButton"
import { Screen } from "../../layout/Screen"
const Products = () => {
  return (
    <Screen flexDirection={'column'}>
        <Flex >
        <Text type='text-xl'>PRODUCTS</Text>
        </Flex>
        <Flex mt={'32px'} justifyContent={'space-between'} alignItems={'center'}>
            <SearchBar placeholder="Search for products" buttonClick={()=> {console.log('object')}}/>
            <PrimaryButton buttontext="New Product" onClick={()=> {console.log('object')}}/>
            <PrimaryButton icon = {<StarIcon/>} onClick={()=> {console.log('object')}}/>
        </Flex>
        <Flex></Flex>
        
    </Screen>
  )
}

export default Products