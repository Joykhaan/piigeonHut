import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../ContextApi/Authprovider/Authprovider';
import MyProducts from '../MyProduct/MyProducts';

const AddProduct = () => {

    const {user} = useContext(AuthContext)
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();
    const  navigate = useNavigate();
    // const {refetch}=useQuery()
    const handleAddProducts = event => {
        event.preventDefault();
        const form = event.target;
        const Brand = form.brand[0].value;
        const pictur = form.picture.files[0];
        const ProductName = form.productname.value;
        const Location = form.location.value;
        const resalePrice = form.productprice.value;
        const originalPrice = form.originalprice.value;
        const useYears = form.yearsofuse.value;
        const purchaseYear = form.purchaseyear.value;
        const postedTime = time;
        const sellerName = form.name.value;
        const description = form.description.value;
        const categorieName = form.brand[0].value;
        const productcondition=form.productcondition.value;
        const number =form.number.value;
        const uid = user.uid;
        const email = user.email;
        console.log(pictur);

        const imageapiKey=process.env.REACT_APP_img;
        console.log(imageapiKey);
        
        // const location = useLocation();
        
        // const from = location.state?.from?.pathname || '/';

        const iid = (iid) => {
            if (Brand === 'Nokia') {
                let id = '01';
                return id
            }
            else if (Brand === 'Samsung') {
                let id = '02'
                return id
            }
            else if (Brand === 'Xiaomi') {
                let id = '03'
                return id
            }
            else if (Brand === 'Apple') {
                let id = '04'
                return id
            }
            else if (Brand === 'Realmi') {
                let id = '05'
                return id
            }
            else if (Brand === 'Sony') {
                let id = '06'
                return id
            }

        }
        const id = (iid(iid));
        const formData=new FormData();
        formData.append('image',pictur)
        const url = `https://api.imgbb.com/1/upload?key=${imageapiKey}`
        fetch(url,{
            method: 'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(imgData =>{
            console.log(imgData)
            if(imgData.success){
                console.log(imgData.data.url)
                const picture=imgData.data.url
                const productCards = {
                    Brand,
                    picture,
                    ProductName,
                    Location,
                    resalePrice,
                    originalPrice,
                    useYears,
                    purchaseYear,
                    postedTime,
                    sellerName,
                    productcondition,
                    number,
                    description,
                    time,
                    date,
                    id,
                    uid,
                    email
                }
                fetch('http://localhost:5000/productdetails', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productCards)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toast.success('Successfully toasted!')
                    form.reset();
                }
                else{toast.success('try again!')}
                navigate('/dashboard/myproducts');
                
            })
            .catch(error => console.error(error));

            }
        })

        
        
        
        
        // const categories = {
        //     id,
        //     categorieName
        // }
        // console.log(productCards)
        // fetch('http://localhost:5000/categoriesinfo', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(categories)
        // })
            // .then(res => res.json())
            // .then(data => {
                
            //     // if(data.acknowledged){
            //     //     toast.success("service added!!",{
            //     //         position:"top-center"
            //     //     });
            //     //     form.reset();
            //     // }
            //     navigate('/dashboard/myproducts');
            //     // refetch()
                
            // })
            // .catch(error => console.error(error));

            

    }
    return (
        <div>
            <h1 className='text-center text-5xl font-bold mt-16 mb-16'>Add New ProDuct</h1>
            <div className='flex justify-center'>
              <form onSubmit={handleAddProducts} className='md:w-1/2 w-full' >
                <div className='flex  justify-center border'><input name='picture' placeholder='choose picture' type="file" /></div>
                <div className="card-body gap-6 grid md:grid-cols-2 grid-cols-1 shadow-xl">
                    <div className="form-control">

                        <input type="text"
                            name='name'
                            placeholder="Your Name" className="input input-bordered"

                        />
                    </div>
                    <div className="form-control">
                        <input type="text"
                            name='productname'
                            placeholder="Product name"


                            className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <input type="text"
                            name='productprice'
                            placeholder="Resell Price"

                            className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <input type="text"
                            name='productcondition'
                            placeholder="Product Condition"

                            className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <input type="text"
                            name='number'
                            placeholder="Phone Number" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <input type="text"
                            name='location'
                            placeholder="Meeting Location" className="input input-bordered" />

                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">What is your name?</span>

                        </label>


                        <select name='brand' className="select select-bordered w-full max-w-xs">

                            <option>Nokia</option>
                            <option>Samsung</option>
                            <option>Xiaomi</option>
                            <option>Apple</option>
                            <option>Realmi</option>
                            <option>Sony</option>
                        </select>



                    </div>



                    <div className="form-control">
                        <input type="text"
                            name='originalprice'
                            placeholder="original Price" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <input type="text"
                            name='purchaseyear'
                            placeholder="Years of purchase" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <input type="text"
                            name='yearsofuse'
                            placeholder="Years of use" className="input input-bordered" />

                    </div>
                    {/* <div className="form-control">
                        <input type="text"
                            name='sellername'
                            placeholder="Seller Name" className="input input-bordered" />

                    </div> */}
                    <div className="form-control">
                        <input type="text"
                            name='brand'
                            placeholder="brand" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <textarea name='description' required className="textarea textarea-bordered" placeholder="Description"></textarea>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Product</button>
                    </div>

                </div>
            </form>  
            </div>
            
            
            {/* <MyProducts></MyProducts> */}
            <Toaster></Toaster>
        </div>
    );
};

export default AddProduct;