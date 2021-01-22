import shopDetails from './dummyShopData';
import ShopItem from './ShopItem';

const ShopList = () => {
    return (
        <div style={{margin: '20px 0'}}>
        {
            shopDetails.map((value,id)=>(
                <ShopItem name={value.name} address={value.address} key={id}
                isOpen={value.isOpen} homeBusiness={value.homeBusiness} />
            ))
        }
        </div>
    );
}

export default ShopList;