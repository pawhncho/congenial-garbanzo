import { CiSearch } from 'react-icons/ci';
import { CiShoppingBasket } from 'react-icons/ci';

const products = [
    {
        'image': 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e7c9aadd-242a-4dd4-8509-6ddf9645525e/air-jordan-1-retro-high-og-mens-shoes-zfwtQc.png',
        'name': 'Air Jordan 1 Retro High',
        'colors': '1 Color',
        'price': '$180',
    },
    {
        'image': 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a1f04dd2-e4a0-4821-9ba7-e3611e1bee61/air-max-dn-shoes-dFBSQh.png',
        'name': 'Nike Air Max Dn',
        'colors': '3 Colors',
        'price': '$160',
    },
    {
        'image': 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-mens-shoes-5FQWGR.png',
        'name': 'Nike Dunk Low Retro',
        'colors': '4 Colors',
        'price': '$115',
    },
    {
        'image': 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ac052fe0-60ce-4ce9-8b3c-fd5fb72eaf3b/air-jordan-4-retro-mens-shoes.png',
        'name': 'Air Jordan 4 Retro',
        'colors': '1 Color',
        'price': '$215',
    },
    {
        'image': 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/i1-7645f306-08aa-4aee-9d18-61c9e3f103d9/air-jordan-1-mid-shoes-X5pM09.png',
        'name': 'Air Jordan 1 Mid',
        'colors': '8 Colors',
        'price': '$125',
    },
    {
        'image': 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoes-jBrhbr.png',
        'name': 'Nike Air Force 1 ',
        'colors': '4 Colors',
        'price': '$115',
    },
    {
        'image': 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ad2b1d62-9409-4fbf-8bb7-5c1b1464a484/air-jordan-9-retro-powder-blue-mens-shoes-3WfxKt.png',
        'name': 'Air Jordan 9 Retro',
        'colors': '1 Color',
        'price': '$210',
    },
]

function Home() {
    return (
        <div className='home'>

            <nav>
                <span className='label'>Welcome, Shahrad</span>
                <CiShoppingBasket className='icon' />
            </nav>

            <form className='search'>
                <CiSearch className='icon' />
                <input type='text' placeholder='Find Products' />
            </form>

            <div className='products'>
                {
                    products.map(product => {
                        return (
                            <div className='product'>
                                <img src={product.image} alt={product.name} />
                                <span className='name'>{product.name}</span>
                                <span className='colors'>{product.colors}</span>
                                <span className='price'>{product.price}</span>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Home;