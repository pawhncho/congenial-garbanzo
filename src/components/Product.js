import { CiStar, CiShoppingBasket, CiCircleChevLeft, CiShare2 } from 'react-icons/ci';

const product = {
    'pictures': [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/i1-7645f306-08aa-4aee-9d18-61c9e3f103d9/air-jordan-1-mid-shoes-X5pM09.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/i1-6a253663-e5cd-49f6-918f-6685dc6b1f85/air-jordan-1-mid-shoes-X5pM09.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/i1-9f77fea4-5eb7-4ea8-bbf4-007748734c4f/air-jordan-1-mid-shoes-X5pM09.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/i1-be7631d2-9c26-4d0d-8626-9aa1d2101e00/air-jordan-1-mid-shoes-X5pM09.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/i1-be7631d2-9c26-4d0d-8626-9aa1d2101e00/air-jordan-1-mid-shoes-X5pM09.png',
    ],
    'name': 'Air Jordan 1 Mid',
    'price': '$125',
    'about': 'Inspired by the original AJ1, the Air Jordan 1 Mid offers fans a chance to follow in MJ\'s footsteps. Fresh color trims the clean, classic materials, imbuing modernity into a classic design.',
    'sizes': [
        'M 9 / W 10.5',
        'M 9.5 / W 11',
        'M 10 / W 11.5',
        'M 10.5 / W 12',
        'M 11 / W 12.5',
        'M 12 / W 13.5',
        'M 13 / W 14.5',
        'M 14 / W 15.5',
    ],
    'colors': ['blue', '#F1F1F1', 'red', 'yellow', '#1F1F1F'],
}

function Product() {
    return (
        <div className='product-page'>

            <div className='navbar'>
                <CiCircleChevLeft className='icon' />
                <CiShoppingBasket className='icon' />
            </div>

            <img src={product.pictures[0]} alt={product.name} />

            <div className='slider'>
                <span className='slide current'></span>
                {
                    product.pictures.map(picture => {
                        return <span className='slide'></span>
                    })
                }
            </div>

            <div className='details'>
                <div className='d-ld'>
                    <h1>{product.name}</h1>
                    <div className='rating'>
                        <p className='reviews'>1593 Reviews</p>
                        <p className='stars'><CiStar className='icon' /> 4.9</p>
                    </div>
                </div>
                <div className='d-rd'>
                    <p className='price'>{product.price}</p>
                </div>
            </div>

            <div className='about'>
                {product.about}
            </div>

            <div className='sizes'>
                <p className='label'>Choose your size</p>
                <div className='list'>
                    <span className='size'
                            style={{ backgroundImage: 'linear-gradient(to right, #EAECED, #EAECED, #FFFCFC)', color: '#1F1F1F', fontWeight: '500' }}>M 8 / W 9.5</span>
                    {
                        product.sizes.map(size => {
                            return <span className='size'>{size}</span>
                        })
                    }
                </div>
            </div>

            <div className='colors'>
                <p className='label'>Choose a color</p>
                <div className='list'>
                    <span className='color'
                            style={{ backgroundImage: 'linear-gradient(to right, grey, grey, #FFFCFC)', opacity: '0.9', boxShadow: 'none' }}></span>
                    {
                        product.colors.map(color => {
                            return <span className='color' style={{ backgroundColor: color }}></span>
                        })
                    }
                </div>
            </div>

            <div className='buttons'>
                <button className='share'><CiShare2 className='icon' />Share</button>
                <button className='cart'><CiShoppingBasket className='icon' /> Add to cart</button>
            </div>

        </div>
    )
}

export default Product;