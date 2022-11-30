
import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../ContextApi/Authprovider/Authprovider';


const AddProduct = () => {

    const {user} = useContext(AuthContext)
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();
    const  navigate = useNavigate();
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
        const productcondition=form.productcondition.value;
        const number =form.number.value;
        const uid = user.uid;
        const email = user.email;
        console.log(pictur);

        const imageapiKey=process.env.REACT_APP_img;
        console.log(imageapiKey);
        


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
                fetch('https://mobile-reselling-server.vercel.app/productdetails', {
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
                   
                  navigate('/dashboard/myproducts');  
                }
                
                
                
            })
            .catch(error => console.error(error));

            }
        })

        
        
        
        
     

            

    }
    return (
        <div>
            <h1 className='text-center text-5xl font-bold mt-16 mb-16'>Add New ProDuct</h1>
            <div className='flex justify-center'>
              <form onSubmit={handleAddProducts} className='md:w-1/2 w-full' >
                <div className='flex  justify-center border'><input name='picture' required placeholder='choose picture' type="file" /></div>
                <div className="card-body gap-6 grid md:grid-cols-2 grid-cols-1 shadow-xl">
                    <div className="form-control">

                        <input type="text"
                            name='name'
                            required
                            placeholder="Your Name" className="input input-bordered"

                        />
                    </div>
                    <div className="form-control">
                        <input type="text"
                            name='productname'
                            placeholder="Product name"
                            required

                            className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <input type="text"
                            name='productprice'
                            placeholder="Resell Price"
                            required
                            className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <input type="text"
                            name='productcondition'
                            placeholder="Product Condition"
                            required
                            className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <input type="text"
                            name='number'
                            placeholder="Phone Number" 
                            required
                            className="input input-bordered" />
 
                    </div>
                    <div className="form-control">
                        <input type="text"
                            name='location'
                            required
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
                            required
                            placeholder="original Price" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <input type="text"
                            name='purchaseyear'
                            required
                            placeholder="Years of purchase" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <input type="text"
                            name='yearsofuse'
                            required
                            placeholder="Years of use" className="input input-bordered" />

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
            
            
       
            
        </div>
    );
};

export default AddProduct;